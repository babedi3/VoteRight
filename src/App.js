/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Provider } from "react-redux";
import { store } from "./redux/store"

import Router from './router'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content"/>
      <Router/>
    </NavigationContainer>
    </Provider>
    
  );
}; 


export default withAuthenticator(App, true);