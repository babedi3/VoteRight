import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from './bottomtabnavigator.routes';
import OfficialInfoScreen from "../screens/OfficialInfoScreen";

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={"Home"}
      component={BottomTabNavigator}
      options={{
        headerShown: false
      }}
    />
    <RootStack.Screen
      name="OfficialInfoScreen"
      component={OfficialInfoScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default Router;