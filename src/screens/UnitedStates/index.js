import React from 'react';
import {Text, /* ScrollView, View, */ SafeAreaView,} from 'react-native';
/* import ProfilePicture from "../../components/ProfilePicture";
 */import UsOfficials from '../../components/UsOfficials';
import styles from './styles';

const HomeScreen = () => (
    <SafeAreaView>
        <Text style={styles.text}>United States</Text>
        <UsOfficials/>
        <Text style={styles.text3}>US Elections</Text>
    </SafeAreaView>
)
export default HomeScreen;