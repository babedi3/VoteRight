import * as React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StateScreen from "./StateScreen/index";
import CountryScreen from "./CountryScreen/index";
import SettingsScreen from "./misc/SettingsScreen"
import Senators  from "./misc/Senators"

const Tab = createBottomTabNavigator();

export default function DataScreenNav() {
  return (
    <Tab.Navigator    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Country") {
            iconName = focused ? "ios-home" : "ios-home";
            //<Image source={require('./assets/us.png')}/>
          }
          if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings";
          }
          if (route.name === "State") {
            //return <Image source={require('./assets/georgia.png')}/>;
            iconName = focused ? "ios-home" : "ios-home";
          }
          if (route.name === "Home") {
            //return <Image source={require('./assets/georgia.png')}/>;
            iconName = focused ? "ios-home" : "ios-home";
          }
          if (route.name === "Senators") {
            //return <Image source={require('./assets/georgia.png')}/>;
            iconName = focused ? "ios-home" : "ios-home";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Country" component={CountryScreen} />
      <Tab.Screen name="State" component={StateScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Senators" component={Senators} />
    </Tab.Navigator>
  );
}