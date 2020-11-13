import React, { useEffect } from "react";
 import { Text, View, TouchableOpacity,  StyleSheet, ScrollView, SafeAreaView } from "react-native";
 import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
 import { useSelector, useDispatch } from "react-redux"; 
 import {onFetchSenate} from "../../redux/actions/VoterActions"
 
 export default function SenatorsList(props) { 
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(onFetchSenate())    
  }, [])
  
  const Senators = useSelector((state) => (
    state
    .voterReducer
    .senators
   .results[0]
                                          .members
                                           ))
  console.log("&&&".repeat(20))
  console.log(Senators)
  
 // console.log(Senators)
  
  // for (let i=0; i<Senators.length; i++) {
  //   console.log(Senators[i].short_title,
  //               Senators[i].last_name,
  //               Senators[i].first_name
  //   )
  // }
  
  // if (Senators !== undefined) {
  //     console.log(`
  //                 BioData:
  //                 Name:${Senators.short_title} ${Senators.last_name} ${Senators.first_name}
  //                 DoB: ${Senators.date_of_birth}
  //                 Gender: ${Senators.gender}
                  
  //                 Representation Details:
  //                 State: ${Senators.state}                  
  //                 Party: ${Senators.party} 
  //                 Leadership Role: ${Senators.leadership_role}
  //                 Next Election: ${Senators.next_election}
                  
  //                 Contact Details:
  //                 Office Addrss: ${Senators.office}
  //                 Phone Number: ${Senators.phone}
  //                 FAX: ${Senators.fax}
                 
  //                 Voting Records:
  //                 Total Votes: ${Senators.total_votes}
  //                 Total Present:  ${Senators.total_present}
  //                 Missed Votes: ${Senators.missed_votes}
  //                 % Missed Votes: ${Senators.missed_votes_pct} 
  //                 % Votes Along  Party Line: ${Senators.votes_with_party_pct}
  //                 % Votes Against Party Lines: ${Senators.votes_against_party_pct}
                  
  //                 Social Media Presence:
  //                 Twitter: ${Senators.twiter_account}
  //                 facebook: ${Senators.facebook_account}
  //                 `)
  // }
  
  
  const SenatorsList = () => (
    <>
    <Text>Senators Details</Text>
    {Senators && Senators.map(Senators => (
                                           <Text key={Senators.date_of_birth} >
                                           {
                  `Senator:
                  Name: ${Senators.short_title} ${Senators.last_name} ${Senators.first_name}
                  DoB: ${Senators.date_of_birth}
                  Gender: ${Senators.gender}                  
                  Representation Details:
                  State: ${Senators.state}                  
                  Party: ${Senators.party} 
                  Leadership Role: ${Senators.leadership_role}
                  Next Election: ${Senators.next_election}                  
                  Contact Details:
                  Office Addrss: ${Senators.office}
                  Phone Number: ${Senators.phone}
                  FAX: ${Senators.fax}                 
                  Voting Records:
                  Total Votes: ${Senators.total_votes}
                  Total Present:  ${Senators.total_present}
                  Missed Votes: ${Senators.missed_votes}
                  % Missed Votes: ${Senators.missed_votes_pct} 
                  % Votes Along  Party Line: ${Senators.votes_with_party_pct}
                  % Votes Against Party Lines: ${Senators.votes_against_party_pct}                  
                  Social Media Presence:
                  Twitter: ${Senators.twiter_account}
                  facebook: ${Senators.facebook_account}
                  `}
                                           </Text>
                                           ))}
    </>
  );
  
  
    return (
          <>
      <View style={{ flex: 1, alignItems: "center", marginTop: 9 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
          SENATORS
        </Text>       
      </View>
      <ScrollView>
      <SenatorsList />
      </ScrollView>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => {alert("You clicked!!")}}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </>
    );
  }
 
  
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom: 100
    },
    data: {
      alignItems: "center",
      padding: 15,
    },
    scrollView: {
      height: '20%',
      width: '80%',
      margin: 20,
      alignSelf: 'center',
      padding: 20,
      borderWidth: 5,
      borderRadius: 5,
      borderColor: 'black',
      backgroundColor: 'lightblue'
    }
  });