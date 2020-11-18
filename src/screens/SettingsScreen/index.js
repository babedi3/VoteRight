import React, {useState} from 'react';
import {Text, /* ScrollView, View, */ SafeAreaView, FlatList, View, Picker, Button, Alert} from 'react-native';
import SettingsPage from '../../components/SettingsPage';
import Hyperlink from 'react-native-hyperlink';
import styles from './styles';
import { useLinkProps } from '@react-navigation/native';



const SettingsScreen = ({handleChangeStateCode, stateCode, /* statesArray */}) => {
/*     const [selectedValue, setSelectedValue] = useState("java");
 */    
    const statesArray = [
  
        {value: "FL", label:"Florida"},
        {value: "GA", label:"Georgia"},
        {value: "AL", label:"Alabama"},
        {value: "NY", label:"New York"},
        {value: "CA", label:"California"},
        {value: "MI", label:"Michigan"},
        {value: "LA", label:"Louisiana"},
        {value: "MS", label:"Mississippi"},
        {value: "NJ", label:"New Jersey"},
        {value: "ME", label:"Maine"},
        {value: "MD", label:"Maryland"},
        {value: "NV", label:"Nevada"},
        {value: "TX", label:"Texas"},
        {value: "WS", label:"Washington"},
        {value: "RI", label:"Rhode Island"},
        {value: "TN", label:"Tennessee"},
        {value: "NM", label:"New Mexico"},
        {value: "AK", label:"Alaska"},
        {value: "AR", label:"Arkansas"},
        {value: "ID", label:"Idaho"},
        {value: "ND", label:"Nort Dakota"},
        {value: "SD", label:"South Dakota"},
        {value: "WY", label:"Wyoming"},
        {value: "IL", label:"Illinois"},
        {value: "UT", label:"Utah"},
        {value: "PA", label:"Pennsylvania"},
        {value: "SC", label:"South Carolina"},
        {value: "VT", label:"Vermont"},
        {value: "VA", label:"Virginia"},
        {value: "WI", label:"Wisconsin"},
        {value: "WV", label:"West Virginia"},
        {value: "OR", label:"Oregon"},
        {value: "OK", label:"Oklahoma"},
        {value: "OH", label:"Ohio"},
        {value: "NC", label:"North Carolina"},
        {value: "NH", label:"New Hampshire"},
        {value: "NE", label:"Nebraska"},
        {value: "MT", label:"Montana"},
        {value: "MO", label:"Missouri"},
        {value: "MN", label:"Minnesota"},
        {value: "MA", label:"Massachussets"},
        {value: "NE", label:"Nebraska"},
        {value: "KY", label:"Kentucky"},
        {value: "KS", label:"Kansas"},
        {value: "IA", label:"Iowa"},
        {value: "IN", label:"Indiana"},
        {value: "HI", label:"Hawaii"},
        {value: "DE", label:"Delaware"},
        {value: "CT", label:"Conneticut"},
        {value: "CO", label:"Colorado"}
       
     ]
    return(
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
                style={styles.container}
                selectedValue={stateCode.value}
                onValueChange={(itemValue, itemIndex) => { 
                    console.log(itemIndex);
                    handleChangeStateCode(itemIndex)}
                    }>
                {statesArray.map((state, i)=> {
                    return <Picker.Item key={i} value={state.value} label={state.label} />
                })}
                {/* <Picker.Item value="FL" label="Florida" />
                <Picker.Item value="GA" label="Georgia" />
                <Picker.Item value="AL" label="Alabama" />
                <Picker.Item value="NY" label="New York" />
                <Picker.Item value="CA" label="California" />
                <Picker.Item value="MI" label="Michigan" />
                <Picker.Item value="LA" label="Louisiana" />
                <Picker.Item value="MS" label="Mississippi" />
                <Picker.Item value="NJ" label="New Jersey" />
                <Picker.Item value="ME" label="Maine" />
                <Picker.Item value="MD" label="Maryland" />
                <Picker.Item value="NV" label="Nevada" />
                <Picker.Item value="TX" label="Texas" />
                <Picker.Item value="WS" label="Washington" />
                <Picker.Item value="RI" label="Rhode Island" />
                <Picker.Item value="TN" label="Tennessee" />
                <Picker.Item value="NM" label="New Mexico" />
                <Picker.Item value="AK" label="Alaska" />
                <Picker.Item value="AR" label="Arkansas" />
                <Picker.Item value="ID" label="Idaho" />
                <Picker.Item value="ND" label="Nort Dakota" />
                <Picker.Item value="SD" label="South Dakota" />
                <Picker.Item value="WY" label="Wyoming" />
                <Picker.Item value="IL" label="Illinois" />
                <Picker.Item value="UT" label="Utah" />
                <Picker.Item value="PA" label="Pennsylvania" />
                <Picker.Item value="SC" label="South Carolina" />
                <Picker.Item value="VT" label="Vermont" />
                <Picker.Item value="VA" label="Virginia" />
                <Picker.Item value="WI" label="Wisconsin" />
                <Picker.Item value="WV" label="West Virginia" />
                <Picker.Item value="OR" label="Oregon" />
                <Picker.Item value="OK" label="Oklahoma" />
                <Picker.Item value="OH" label="Ohio" />
                <Picker.Item value="NC" label="North Carolina" />
                <Picker.Item value="NH" label="New Hampshire" />
                <Picker.Item value="NE" label="Nebraska" />
                <Picker.Item value="MT" label="Montana" />
                <Picker.Item value="MO" label="Missouri" />
                <Picker.Item value="MN" label="Minnesota" />
                <Picker.Item value="MA" label="Massachussets" />
                <Picker.Item value="NE" label="Nebraska" />
                <Picker.Item value="KY" label="Kentucky" />
                <Picker.Item value="KS" label="Kansas" />
                <Picker.Item value="IA" label="Iowa" />
                <Picker.Item value="IN" label="Indiana" />
                <Picker.Item value="HI" label="Hawaii" />
                <Picker.Item value="DE" label="Delaware" />
                <Picker.Item value="CT" label="Conneticut" />
                <Picker.Item value="CO" label="Colorado" /> */}

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
      
)}


export default SettingsScreen;