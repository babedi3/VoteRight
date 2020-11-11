import React, { useEffect } from "react";
 import { Text, View, TouchableOpacity,  StyleSheet } from "react-native";
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
  
  const Senators = useSelector((state) => (state.voterReducer.senators.results))
  console.log("&&&".repeat(20))
  console.log(Senators[0].members)
  
  
  
//   const CodersList = () => (
//     <>
//     <Text>Team Members</Text>
//     {Team && Team.map(item => (<Text key={item.name}>{`${item.name} ${item.role}`}</Text>))}
//     </>
//   );
  
  
    return (
      <>      
      <View style={{ flex: 1, alignItems: "center", marginTop: 9 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
          SENATORS
        </Text>       
      </View>
      {/* <CodersList /> */}
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