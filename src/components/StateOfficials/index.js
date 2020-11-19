import React, { useEffect, useState } from 'react';
import OfficialInfoCard from '../OfficialInfoCard';
import { View, FlatList } from 'react-native';
import styles from './styles';
import axios from 'axios';


const StateOfficials = ({ stateCode }) => {
    console.log(stateCode);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'X-API-Key': 'TlSlzuHKa8O0FbZpjhnDO3IWIh8aUiraXBY91XD2'
            }

            let legislatorsResponse = await axios.get('https://theunitedstates.io/congress-legislators/legislators-current.json');

            //console.log('legislatorsResponse', legislatorsResponse);

            let legislators = {};

            for (let i = 0; i < legislatorsResponse.data.length; i++) {
                let item = legislatorsResponse.data[i];
                if (item) {
                    //console.log('item', item);
                    //console.log('item.name.official_full', item.name.official_full);
                    //console.log('item.id.bioguide', item.id.bioguide);
                    legislators[item.name.first + ' ' + item.name.last] = {
                        bioguide: item.id.bioguide,
                        birthday: item.bio.birthday,
                        party: item.terms[item.terms.length - 1].party
                    };

                    legislators[item.name.official_full] = {
                        bioguide: item.id.bioguide,
                        birthday: item.bio.birthday,
                        party: item.terms[item.terms.length - 1].party
                    };

                    legislators[item.id.wikipedia] = {
                        bioguide: item.id.bioguide,
                        birthday: item.bio.birthday,
                        party: item.terms[item.terms.length - 1].party
                    };
                }
            }

            //console.log('legislators', legislators);

            //setAppState({ loading: true });
            let houseMembersResponse = await axios.get('https://api.propublica.org/congress/v1/members/house/' + stateCode.value + '/current.json', {
                headers: headers
            });

            let senateMembersResponse = await axios.get('https://api.propublica.org/congress/v1/members/senate/' + stateCode.value + '/current.json', {
                headers: headers
            });

            let unionMembers = [...senateMembersResponse.data.results, ...houseMembersResponse.data.results];

            //console.log('unionMembers', unionMembers);

            let newData = [];

            for (let i = 0; i < unionMembers.length; i++) {
                let r = unionMembers[i];

                let legislator = legislators[r.name];

                if (!legislator)
                    legislator = legislators[r.first_name + ' ' + r.last_name];

                let member = {
                    id: r.id,
                    name: r.name,
                    title: r.role,
                    birthday: legislator ? legislator.birthday : '',
                    party: legislator ? legislator.party : '',
                    imageUri: legislator ? 'https://theunitedstates.io/images/congress/225x275/' + legislator.bioguide + '.jpg' : '',
                    votePositions: []
                };

                newData.push(member);

                //console.log('newData', newData);

                let votePositionsResponse = await axios.get('https://api.propublica.org/congress/v1/members/' + member.id + '/votes.json', {
                    headers: headers
                });

                console.log('votePositionsResponse', votePositionsResponse);

                let billIds = {};

                for (let j = 0; j < votePositionsResponse.data.results.length; j++) {
                    let vp = votePositionsResponse.data.results[j];

                    for (let j2 = 0; j2 < vp.votes.length; j2++) {
                        let vote = vp.votes[j2];

                        if (vote.bill.bill_id && vote.bill.title && !billIds[vote.bill.bill_id]) {
                            member.votePositions.push({
                                bill_id: vote.bill.bill_id,
                                title: vote.bill.title,
                                position: vote.position
                            });

                            billIds[vote.bill.bill_id] = true;
                        }
                    }
                }

                newData.forEach(m => {
                    m.votePositions.forEach(v => {
                        if (v.bill_id && !v.title) {
                            //console.log('v.bill_id', v.bill_id);
                            v.title = billTitles[v.bill_id];
                            //console.log('v.title', billTitles[v.bill_id]);
                        }
                    });
                });

                setData(newData);
            }

            console.log('newData', newData);
        })();
    }, []);

    return (
        <FlatList
            style={styles.scroll}
            data={data}
            keyExtractor={({ name }) => name}
            vertical
            renderItem={({ item }) => <OfficialInfoCard imageUri={item.imageUri} name={item.name} title={item.title} birthday={item.birthday} party={item.party} votePositions={item.votePositions} />}
        />
    )
    /* { <OfficialInfoCard imageUri={data[0].imageUri} name={data[0].name} title={data[0].title} />
     <OfficialInfoCard imageUri={data[1].imageUri} name={data[1].name} title={data[1].title}/>
 </View> }*/
}

export default StateOfficials;