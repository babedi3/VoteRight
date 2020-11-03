import React from 'react';
import {Text, ScrollView, View, SafeAreaView,} from 'react-native';
import ProfilePicture from "../../components/ProfilePicture";
import styles from './styles';

const HomeScreen = () => (
    <SafeAreaView>
        <Text style={styles.text}>GEORIGA</Text>
        <Text style={styles.text2}>Officials</Text>
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <ProfilePicture uri={'https://bloximages.newyork1.vip.townnews.com/news-daily.com/content/tncms/assets/v3/editorial/1/51/151983da-1147-5785-98bd-d349255a3ee6/5f87a2556be39.image.jpg?resize=750%2C600'}/>
                <View style={styles.container2}>
                    <Text style={styles.name}>Governor: Brian Kemp</Text>
                    <Text style={styles.name2}>Term: Jan 31, 2021</Text>
                </View>
            </View>
            <ProfilePicture uri={'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg'}/>
            <ProfilePicture uri={'https://georgia.gov/sites/georgia.gov/files/styles/square/public/2019-11/geoff_duncan.jpg?h=1e66e246&itok=3AWydZiy'}/>
            <ProfilePicture uri={'https://georgia.gov/sites/georgia.gov/files/styles/square/public/2019-11/carr_headshot.jpg?h=4de69ae3&itok=F6gT4YYc'}/>
        </ScrollView>
        <Text style={styles.text2}>Senate</Text>
        <ScrollView style={styles.scroll}>
            <ProfilePicture uri={'https://bloximages.newyork1.vip.townnews.com/news-daily.com/content/tncms/assets/v3/editorial/1/51/151983da-1147-5785-98bd-d349255a3ee6/5f87a2556be39.image.jpg?resize=750%2C600'}/>
            <ProfilePicture uri={'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg'}/>
        </ScrollView>
        <Text style={styles.text2}>House of Representatives</Text>
        <ScrollView style={styles.scroll}>
            <ProfilePicture uri={'https://bloximages.newyork1.vip.townnews.com/news-daily.com/content/tncms/assets/v3/editorial/1/51/151983da-1147-5785-98bd-d349255a3ee6/5f87a2556be39.image.jpg?resize=750%2C600'}/>
            <ProfilePicture uri={'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg'}/>
        </ScrollView>

        <Text style={styles.text3}>Georgia Elections</Text>

    </SafeAreaView>
)
export default HomeScreen;