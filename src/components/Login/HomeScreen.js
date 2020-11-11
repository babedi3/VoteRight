
import 'react-native-gesture-handler';
import * as React from 'react';
import {widthPercentageToDP as wp,
        heightPercentageToDP as hp
        } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


//Import all required component
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  Image,
} from 'react-native';

export function HomeScreen () {  
  const navigation = useNavigation();
    return (
      <>
        <ScrollView>
          <View style={{marginTop: 50}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.Header}>Vote | Right</Text>

              <Text style={styles.subHeader}>Welcome!</Text>

              <Image
                source={require('../Login/img/vote1.png')}
                style={{
                  width: '40%',
                  height: 100,
                  resizeMode: 'contain',
                  marginTop: 30,
                  borderRadius: wp('10%'),
                }}
              />
            </View>
          </View>
        </ScrollView>
        
          <View style={(styles.buttonTextStyle, styles.buttonStyle)}>
            <Button
              title="Login"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <View style={(styles.buttonTextStyle, styles.buttonStyle)}>
            <Button title="Continue As a Guest" 
            onPress={() => navigation.navigate("DataScreenNav")} />
          </View>
          
      </>
    );
}


const styles = StyleSheet.create({       
  mainBody: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
    Header: {
       fontSize: 35,
       color: '#D11D1D',
       fontWeight: 'bold',
       marginBottom: 15,
    },
    subHeader: {
        fontSize: 35,
        color: '#1D20D1',
        fontWeight: 'bold'
     },
  buttonStyle: {
    borderColor: '#0A0A0A',
    borderRadius: 5,
    marginTop: hp('1%'),
    marginBottom: hp('5%'),
    width: wp('100%'),
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 20,
    fontSize: 16,    
    fontWeight: 'bold',
  },
});