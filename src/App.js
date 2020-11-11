import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "./components/Login/HomeScreen";
import LoginScreen from "./components/Login/LoginScreen";
import RegisterScreen from "./components/Login/RegisterScreen";
import DataScreenNav from "./screens/DataScreens";
import { Provider } from "react-redux";
import { store } from "./redux/store"

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="DataScreenNav" component={DataScreenNav}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
