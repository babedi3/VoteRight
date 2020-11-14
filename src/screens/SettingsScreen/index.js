import React from 'react';
import {Text, /* ScrollView, View, */ SafeAreaView, FlatList, View, Picker, Button, Alert} from 'react-native';
import SettingsPage from '../../components/SettingsPage';
import Hyperlink from 'react-native-hyperlink';
import styles from './styles';



const SettingsScreen = () => (
    <SafeAreaView>
        
        <Text style={styles.text}>Settings</Text>
        <Text style={styles.text3}> Future Development: </Text>
        
        <Text style={styles.text2}
            color='dark blue'>Facebook Login: </Text>
        <Text style={styles.text4}>In the future the user will have the ability to signup using the users Facebook Account.</Text>
            <Button 
            title="Facebook Authentication"
            color="dark blue"
            onPress={() => Alert.alert('FaceBook Login Coming Soon!!')}
            />
        <Text style={styles.text2}>State Dropdown </Text>
        <Text style={styles.text4}>In the future we will provide the user with the ability to select a state that will be defaulted when searching the app for data.'</Text>
            <Picker 
                style={styles.container}>
                <Picker.Item label="FL" value="Florida" />
                <Picker.Item label="GA" value="Georgia" />
                <Picker.Item label="AL" value="Alabama" />
                <Picker.Item label="NY" value="New York" />
                <Picker.Item label="CA" value="California" />
            </Picker>
        <Text style={styles.text2}>Register to Vote </Text>
        <Hyperlink linkDefault={ true }
            linkText={ url => url === 'https://www.usa.gov/register-to-vote' ? 'Click to find out how to register to vote. Vote Right!!' : url }
            >
            <Text style={styles.text4}>
                 https://www.usa.gov/register-to-vote
            </Text>
        
        </Hyperlink>
        <Text style={styles.text2}>Political News </Text>
        <Hyperlink linkDefault={ true }
            linkText={ url => url === 'https://www.usnews.com/news/political-news' ? 'Click to find out the latest political news from US News.' : url }
            >
            <Text style={styles.text4}>
                 https://www.usnews.com/news/political-news
            </Text>
        
        </Hyperlink>
        
        
        
    {/* <SettingsPage/> */}
       
    </SafeAreaView>
      
)


export default SettingsScreen;