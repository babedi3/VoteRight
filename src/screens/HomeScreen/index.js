import React from 'react';
import {Text, /* ScrollView, View, */ SafeAreaView,} from 'react-native';
/* import ProfilePicture from "../../components/ProfilePicture";
 */import StateOfficials from '../../components/StateOfficials';
import styles from './styles';

const HomeScreen = () => (
    <SafeAreaView>
        <Text style={styles.text}>GEORIGA</Text>
        <StateOfficials/>
        <Text style={styles.text3}>Georgia Elections</Text>
    </SafeAreaView>
)
export default HomeScreen;