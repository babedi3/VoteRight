import React, { useState, useEffect } from "react";
 import { Text, View, TouchableOpacity,  StyleSheet } from "react-native";
 import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
 import { useSelector, useDispatch } from "react-redux"; 
 import {onFetchVoters} from "../../redux/actions/VoterActions"
 
 export default function SettingsScreen(props) { 
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(onFetchVoters())    
  }, [])
  
  const Team = useSelector((state) => (state.voterReducer.voters))
  console.log("---".repeat(20))
  console.log(Team)
  
  
  
  const CodersList = () => (
    <>
    <Text>Team Members</Text>
    {Team && Team.map(item => (<Text key={item.name}>{`${item.name} ${item.role}`}</Text>))}
    </>
  );
  
  
    return (
      <>      
      <View style={{ flex: 1, alignItems: "center", marginTop: 9 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
          Settings Screen 
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, fontWeight: "bold" }}>
          User Details
        </Text>
        <Text style={{ fontSize: 18, marginTop: hp("5%"), width: wp("90%") }}>
          Visit www.prorepublic.com for more detailed information 
        </Text>
      </View>
      <CodersList />
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
  });