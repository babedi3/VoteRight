import React, { useEffect, useState } from 'react';
import OfficialInfoCard from '../OfficialInfoCard';
import { View, FlatList } from 'react-native';
import styles from './styles';
import axios from 'axios';


const UsOfficials = () => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        const headers = {
            'X-API-Key': 'hMH552ChNPO1vNp8BxcEeGcxV74mx9w1gfEclcoq'
        }

        axios.get('https://theunitedstates.io/congress-legislators/legislators-current.json').then((response) => {
            //console.log(response);

            let legislators = {};

            for (let i = 0; i < response.data.length; i++) {
                let item = response.data[i];
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
            axios.get('https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=hMH552ChNPO1vNp8BxcEeGcxV74mx9w1gfEclcoq', {
                //headers: headers
            }).then((response) => {
                console.log(response);
/* 
                let newData = [];

                for (let i = 0; i < response.data.results.length; i++) {
                    let r = response.data.results[i];

                    let legislator = legislators[r.name];

                    if (!legislator)
                        legislator = legislators[r.first_name + ' ' + r.last_name];

                    newData.push({
                        name: r.name,
                        title: r.role,
                        birthday: legislator ? legislator.birthday : '',
                        party: legislator ? legislator.party : '',
                        imageUri: legislator ? 'https://theunitedstates.io/images/congress/225x275/' + legislator.bioguide + '.jpg' : ''
                    });
                }

                setData(newData); */

                //console.log('newData', newData);
            })
                .catch(function (error) {
                    console.log(error);
                });
        })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    return (
        <FlatList
            style={styles.scroll}
            data={data}
            keyExtractor={({ name }) => name}
            vertical
            renderItem={({ item }) => <OfficialInfoCard imageUri={item.imageUri} name={item.name} title={item.title} birthday={item.birthday} party={item.party} />}
        />
    

        
    )
    /* { <OfficialInfoCard imageUri={data[0].imageUri} name={data[0].name} title={data[0].title} />
     <OfficialInfoCard imageUri={data[1].imageUri} name={data[1].name} title={data[1].title}/>
 </View> }*/
}

export default UsOfficials;