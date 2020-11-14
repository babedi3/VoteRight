import React from 'react';
import OfficialInfoCard from '../OfficialInfoCard';
import {View, FlatList} from 'react-native';
import styles from './styles';


const data= [
    {
        imageUri: 'https://www.shutterstock.com/image-vector/dropdown-icon-logo-vector-symbol-down-1209845797',
        name: 'State Dropdown',
        title: 'In the Future we will provide the user with a dropdown for users to default the State when the US Officials and Representatives are displayed.',
    }, {
        imageUri: '',
        name: 'Facebook Login',
        title: 'In the future the user will have the ability to signup using their Facebook Account.',
    }, {
        imageUri: '',
        name: 'Election Dates',
        title: 'In the future the user will be able to see the term expiration off each Official and Representative.',
    },{
        imageUri: '',
        name: 'Social Media',
        title: 'In the future we will provide the user with a link to the Official or Representatives Twitter account and latest Tweet',
    },{
        imageUri: '',
        name: 'News',
        title: 'In the future the user will have the ability to see the current headline of a particular Official and Representative',
    },
]


const SettingsPage = () => (
    <FlatList 
        style={styles.scroll}
        data={data}
        keyExtractor={({name}) => name}
        vertical
        renderItem={({item}) => <OfficialInfoCard imageUri={item.imageUri} name={item.name} title={item.title}/>}
    />

      
)

export default SettingsPage;