
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';



function LoginScreen ()  {  
  const navigation = useNavigation();

  return (

      
    <View style={styling.mainBody}>
        <View style={{ marginTop: 100 }}>
            <View style={{ alignItems: 'center' }}>
            <Text style={styling.Header}>Vote | Right</Text>
              <Image
                source={require('../Login/img/vote1.png')}
                style={{
                  width: '40%',
                  height: 80,
                  resizeMode: 'contain',
                  margin: 30,
                  borderRadius: wp('10%')
                }}
              />
            </View>
            
            <View style={styling.SectionStyle}>
              <TextInput
                style={styling.inputStyle}
                placeholder="Enter Your Email" 
                placeholderTextColor="#0A0A0A"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            
            <View style={styling.SectionStyle}>
              <TextInput
                style={styling.inputStyle}
                placeholder="Enter Your Password" 
                placeholderTextColor="#0A0A0A"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            
            <TouchableOpacity
              style={styling.buttonStyle}
              activeOpacity={0.5}
             >
              <Text style={styling.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            
            <Text
              style={styling.registerTextStyle}>
              OR
            </Text>
            
            <View style={styling.fixToText}>
            <Button            
          title="New? Register"
          onPress={() => navigation.navigate("Register")}
        />
      
      <Button
          title="Go Back"
          onPress={() => navigation.navigate("Welcome")}
        />   
        </View>         
           
        </View>
    </View>
    
  );
};
export default LoginScreen;

const styling = StyleSheet.create({
    Header: {
       fontSize: 35,
       color: '#0A0A0A',
       fontWeight: 'bold'
    },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#0A0A0A',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: wp('30%'),
    marginRight: 35,
    marginTop: hp('7%'),
    marginBottom: hp('5%'),
    fontWeight: 'bold',
    width: wp('40%'),
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#0A0A0A',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#0A0A0A',
    textAlign: 'center',
  },
  registerTextStyle: {
    color: '#0A0A0A',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 30,
    marginBottom: hp("10%"),
    marginLeft: 20,
    marginRight: 20,
  },
});