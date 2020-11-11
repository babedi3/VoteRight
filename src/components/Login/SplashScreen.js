
//Import React and Hooks we needed
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//Import all required component
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';

const SplashScreen = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./img/eagle.png')}
        style={{ 
                width: '90%', 
                borderRadius: hp('50%'),
                resizeMode: 'contain', 
                margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size='large'
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#34495E',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  });
