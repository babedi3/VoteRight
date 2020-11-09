/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar, 
  Image,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import UnitedStates from './screens/UnitedStates';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withAuthenticator } from 'aws-amplify-react-native';


const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Settings') {
              return <Ionicons name="settings" size={size} color={'black'}/>;
            }
            if (route.name === 'State') {
              return <Image source={require('./assets/georgia.png')}/>;
            }
            if (route.name === 'US') {
              return <Image source={require('./assets/us.png')}/>;
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
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}; 
/* 
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content"/>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Settings') {
                return <Ionicons name="settings" size={size} color={'black'}/>;
              }
              if (route.name === 'State') {
                return <Image source={require('./assets/georgia.png')}/>;
              }
              if (route.name === 'US') {
                return <Image source={require('./assets/us.png')}/>;
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
          <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

class MySectionHeader extends sectionHeader {
  render() {
    return (
      <View style={styles.container}>
        <img style={{width: 250, height: 250}}
        src={logo}/>
      </View>
    )}
};
/* class theme extends Component{
  render() {
    return (
      <View style={styles.container}>
        <img style={{width: 250, height: 250}}
        src={logo}/>
      </View>
    );
}}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
 */

export default withAuthenticator(App, true);
