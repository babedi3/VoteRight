import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import ProfilePicture from "../ProfilePictureLarge";

const OfficialInfoScreen = ({ route, navigation }) => {
    const { name, title, birthday, party, imageUri } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ProfilePicture uri={imageUri}/>
            <Text>{name}</Text>
            <Text>{party}</Text>
            <Text>{title}</Text>
            <Text>{birthday}</Text>
        </SafeAreaView>
    )
}

export default OfficialInfoScreen;