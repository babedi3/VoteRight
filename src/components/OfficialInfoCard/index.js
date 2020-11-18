import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ProfilePicture from "../ProfilePicture";


const OfficialInfoCard = ({name, title, birthday, party, imageUri}) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('OfficialInfoScreen', {
            name: name,
            title: title,
            birthday:birthday,
            party:party,
            imageUri:imageUri
          });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ProfilePicture uri={imageUri}/>
            <View style={styles.container2}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
 }

export default OfficialInfoCard;