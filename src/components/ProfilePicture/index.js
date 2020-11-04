import React from 'react';
import {Image, View} from 'react-native'; 
import styles from './styles';

const ProfilePicture = ({ uri }) => (
   <View style={styles.container}>
        <Image 
            source={{ uri }} 
            style={styles.image}
        />
    </View>
)

export default ProfilePicture;