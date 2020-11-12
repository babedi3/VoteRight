
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import UnitedStates from '../screens/UnitedStates';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => (
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

    <Tab.Screen name="State" component={HomeScreen} />
    <Tab.Screen name="US" component={UnitedStates} />
    <Tab.Screen name="Settings" component={SettingsScreen}/>
  </Tab.Navigator>

)

export default BottomTabNavigator;