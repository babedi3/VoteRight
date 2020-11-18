import React from 'react';
import {Text, /* ScrollView, View, */ SafeAreaView,} from 'react-native';
/* import ProfilePicture from "../../components/ProfilePicture";
 */import StateOfficials from '../../components/StateOfficials';
import styles from './styles';

const HomeScreen = ({stateCode}) => (
    <SafeAreaView>
        <Text style={styles.text} >{stateCode.label}</Text>
        <StateOfficials stateCode={stateCode} />
        <Text style={styles.text3}>{stateCode.label} Elections</Text>
    </SafeAreaView>
)
export default HomeScreen;