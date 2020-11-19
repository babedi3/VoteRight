import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import ProfilePicture from "../ProfilePictureLarge";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const OfficialInfoScreen = ({ route, navigation }) => {
    const { name, title, birthday, party, imageUri, votePositions } = route.params;

    const tableHead = ['Title', 'Position'];
    const tableData = votePositions.map(v => [v.title, v.position]);

    return (
        <SafeAreaView >
            <View style={styles.profileContainer}>
                <ProfilePicture uri={imageUri} />
                <Text>{name}</Text>
                <Text>{party}</Text>
                <Text>{title}</Text>
                <Text>{birthday}</Text>
            </View>
            <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} flexArr={[4, 1]}>
                    <Row flexArr={[4, 1]} data={tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows flexArr={[4, 1]} data={tableData} textStyle={styles.text} />
                </Table>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OfficialInfoScreen;