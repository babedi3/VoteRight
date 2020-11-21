
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import UnitedStates from '../screens/UnitedStates';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();
const array = [
  { value: "AK", label: "Alaska", image: require("../assets/states/Alaska.png") },
  { value: "AL", label: "Alabama", image: require("../assets/states/Alabama.png") },
  { value: "AR", label: "Arkansas", image: require("../assets/states/Arkansas.png") },
  { value: "CA", label: "California", image: require("../assets/states/California.png") },
  { value: "CO", label: "Colorado", image: require("../assets/states/Colorado.png") },
  { value: "CT", label: "Connecticut", image: require("../assets/states/Connecticut.png") },
  { value: "DE", label: "Delaware", image: require("../assets/states/Delaware.png") },
  { value: "FL", label: "Florida", image: require("../assets/states/Florida.png") },
  { value: "GA", label: "Georgia", image: require("../assets/states/Georgia.png") },
  { value: "HI", label: "Hawaii", image: require("../assets/states/Hawaii.png") },
  { value: "ID", label: "Idaho", image: require("../assets/states/Idaho.png") },
  { value: "IL", label: "Illinois", image: require("../assets/states/Illinois.png") },
  { value: "IN", label: "Indiana", image: require("../assets/states/Indiana.png") },
  { value: "IA", label: "Iowa", image: require("../assets/states/Iowa.png") },
  { value: "KS", label: "Kansas", image: require("../assets/states/Kansas.png") },
  { value: "KY", label: "Kentucky", image: require("../assets/states/Kentucky.png") },
  { value: "LA", label: "Louisiana", image: require("../assets/states/Louisiana.png") },
  { value: "MA", label: "Massachusetts", image: require("../assets/states/Massachusetts.png") },
  { value: "MD", label: "Maryland", image: require("../assets/states/Maryland.png") },
  { value: "ME", label: "Maine", image: require("../assets/states/Maine.png") },
  { value: "MI", label: "Michigan", image: require("../assets/states/Michigan.png") },
  { value: "MN", label: "Minnesota", image: require("../assets/states/Minnesota.png") },
  { value: "MO", label: "Missouri", image: require("../assets/states/Missouri.png") },
  { value: "MS", label: "Mississippi", image: require("../assets/states/Mississippi.png") },
  { value: "MT", label: "Montana", image: require("../assets/states/Montana.png") },
  { value: "NC", label: "North Carolina", image: require("../assets/states/North Carolina.png") },
  { value: "ND", label: "North Dakota", image: require("../assets/states/North Dakota.png") },
  { value: "NE", label: "Nebraska", image: require("../assets/states/Nebraska.png") },
  { value: "NH", label: "New Hampshire", image: require("../assets/states/New Hampshire.png") },
  { value: "NJ", label: "New Jersey", image: require("../assets/states/New Jersey.png") },
  { value: "NM", label: "New Mexico", image: require("../assets/states/New Mexico.png") },
  { value: "NV", label: "Nevada", image: require("../assets/states/Nevada.png") },
  { value: "NY", label: "New York", image: require("../assets/states/New York.png") },
  { value: "OH", label: "Ohio", image: require("../assets/states/Ohio.png") },
  { value: "OK", label: "Oklahoma", image: require("../assets/states/Oklahoma.png") },
  { value: "OR", label: "Oregon", image: require("../assets/states/Oregon.png") },
  { value: "PA", label: "Pennsylvania", image: require("../assets/states/Pennsylvania.png") },
  { value: "RI", label: "Rhode Island", image: require("../assets/states/Rhode Island.png") },
  { value: "SC", label: "South Carolina", image: require("../assets/states/South Carolina.png") },
  { value: "SD", label: "South Dakota", image: require("../assets/states/South Dakota.png") },
  { value: "TN", label: "Tennessee", image: require("../assets/states/Tennessee.png") },
  { value: "TX", label: "Texas", image: require("../assets/states/Texas.png") },
  { value: "UT", label: "Utah", image: require("../assets/states/Utah.png") },
  { value: "VA", label: "Virginia", image: require("../assets/states/Virginia.png") },
  { value: "VT", label: "Vermont", image: require("../assets/states/Vermont.png") },
  { value: "WI", label: "Wisconsin", image: require("../assets/states/Wisconsin.png") },
  { value: "WS", label: "Washington", image: require("../assets/states/Washington.png") },
  { value: "WV", label: "West Virginia", image: require("../assets/states/West Virginia.png") },
  { value: "WY", label: "Wyoming", image: require("../assets/states/Wyoming.png") },

]

const BottomTabNavigator = () => {
  const [selectedValue, setSelectedValue] = useState(/* {label: "Georgia", value: "GA"} */ array[0]);
  // State as in location state like georgia
  const handleChangeStateCode = (index) => {
    setSelectedValue(array[index])
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Settings') {
            return <Ionicons name="settings" size={size} color={'black'} />;
          }
          if (route.name === 'State') {
            for (let i = 0; i < array.length; i++) {
              let item = array[i];
              // console.log('item', item);
              // console.log('selectedValue', selectedValue);
              if (item.value === selectedValue.value) {
                //console.log('found item', item);
                return <Image source={item.image} style={{ width: 100, height: 35, resizeMode: 'contain' }} />;
              }
            }
          }
          if (route.name === 'US') {
            return <Image source={require('../assets/us.png')} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        showLabel: 'false',
      }}
    >

      <Tab.Screen name="State" component={() => <HomeScreen stateCode={selectedValue} />} />
      <Tab.Screen name="US" component={UnitedStates} />
      <Tab.Screen name="Settings" component={() => <SettingsScreen /* statesArray={array} */ handleChangeStateCode={handleChangeStateCode} stateCode={selectedValue} />} />
    </Tab.Navigator>

  )
}

export default BottomTabNavigator;