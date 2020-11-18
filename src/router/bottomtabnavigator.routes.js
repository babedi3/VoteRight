
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import UnitedStates from '../screens/UnitedStates';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();
const array= [
  
   {value: "FL", label:"Florida"},
   {value: "GA", label:"Georgia"},
   {value: "AL", label:"Alabama"},
   {value: "NY", label:"New York"},
   {value: "CA", label:"California"},
   {value: "MI", label:"Michigan"},
   {value: "LA", label:"Louisiana"},
   {value: "MS", label:"Mississippi"},
   {value: "NJ", label:"New Jersey"},
   {value: "ME", label:"Maine"},
   {value: "MD", label:"Maryland"},
   {value: "NV", label:"Nevada"},
   {value: "TX", label:"Texas"},
   {value: "WS", label:"Washington"},
   {value: "RI", label:"Rhode Island"},
   {value: "TN", label:"Tennessee"},
   {value: "NM", label:"New Mexico"},
   {value: "AK", label:"Alaska"},
   {value: "AR", label:"Arkansas"},
   {value: "ID", label:"Idaho"},
   {value: "ND", label:"Nort Dakota"},
   {value: "SD", label:"South Dakota"},
   {value: "WY", label:"Wyoming"},
   {value: "IL", label:"Illinois"},
   {value: "UT", label:"Utah"},
   {value: "PA", label:"Pennsylvania"},
   {value: "SC", label:"South Carolina"},
   {value: "VT", label:"Vermont"},
   {value: "VA", label:"Virginia"},
   {value: "WI", label:"Wisconsin"},
   {value: "WV", label:"West Virginia"},
   {value: "OR", label:"Oregon"},
   {value: "OK", label:"Oklahoma"},
   {value: "OH", label:"Ohio"},
   {value: "NC", label:"North Carolina"},
   {value: "NH", label:"New Hampshire"},
   {value: "NE", label:"Nebraska"},
   {value: "MT", label:"Montana"},
   {value: "MO", label:"Missouri"},
   {value: "MN", label:"Minnesota"},
   {value: "MA", label:"Massachussets"},
   {value: "NE", label:"Nebraska"},
   {value: "KY", label:"Kentucky"},
   {value: "KS", label:"Kansas"},
   {value: "IA", label:"Iowa"},
   {value: "IN", label:"Indiana"},
   {value: "HI", label:"Hawaii"},
   {value: "DE", label:"Delaware"},
   {value: "CT", label:"Conneticut"},
   {value: "CO", label:"Colorado"}
  
]

const BottomTabNavigator = () => {
  const [selectedValue, setSelectedValue] = useState(/* {label: "Georgia", value: "GA"} */ array[0]);
  // State as in location state like georgia
const handleChangeStateCode = (index) => {
  setSelectedValue(array[index])
}

  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Settings') {
          return <Ionicons name="settings" size={size} color={'black'}/>;
        }
        if (route.name === 'State') {
          return <Image source={require('../assets/georgia.png')}/>;
        }
        if (route.name === 'US') {
          return <Image source={require('../assets/us.png')}/>;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      showLabel: 'false',
    }}
  > 

    <Tab.Screen name="State" component={()=> <HomeScreen stateCode={selectedValue} />} />
    <Tab.Screen name="US" component={UnitedStates} />
    <Tab.Screen name="Settings" component={()=> <SettingsScreen /* statesArray={array} */ handleChangeStateCode={handleChangeStateCode} stateCode={selectedValue} />}/>
  </Tab.Navigator>

)}

export default BottomTabNavigator;