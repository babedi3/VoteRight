import React, {useState} from 'react';
import {Text, ImageBackground, SafeAreaView, FlatList, View, Picker} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import styles from './styles';
import { useLinkProps } from '@react-navigation/native';




const SettingsScreen = ({handleChangeStateCode, stateCode, /* statesArray */}) => {
/*     const [selectedValue, setSelectedValue] = useState("java");
 */   
    const image = { uri: 'https://newcitytimes.com/images/made/images/uploads/Third_Party_Symbols_980_530_80_s_c1_t_c_0_0_1.jpg' };
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
        <Text style={styles.text2}>State</Text>
        <Text style={styles.text4}></Text>
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
                {}

            </Picker>
        <Text style={styles.text2}>Register to Vote </Text>
        <Hyperlink linkDefault={ true }
            linkText={ url => url === 'https://www.usa.gov/register-to-vote' ? 'Click to find out how to register to vote.' : url }
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
       
        <Text>{}</Text>
        <ImageBackground source={image} style={{ 
            marginTop: '10%', 
            marginLeft: '5%',
            resizeMode: "cover",
            justifyContent: "center", 
            width: '95%', 
            height: '52%'
            }}>
          
        </ImageBackground> 
            
    
    </SafeAreaView>
      
)}


export default SettingsScreen;