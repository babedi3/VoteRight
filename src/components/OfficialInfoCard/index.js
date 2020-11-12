import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ProfilePicture from "../ProfilePicture";


const OfficialInfoCard = ({imageUri, name, title}) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('OfficialInfoScreen');
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