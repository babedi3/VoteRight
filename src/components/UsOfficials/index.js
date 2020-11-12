import React from 'react';
import OfficialInfoCard from '../OfficialInfoCard';
import {View, FlatList} from 'react-native';
import styles from './styles';


const data= [
   
    {
        imageUri: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc0NjMzNDczMzM0NTg1MzM0/gettyimages-465470375.jpg',
        name: 'Joe Biden',
        title: 'President',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Pergrdue',
        title: 'Lieutenant Governor',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Peagrdue',
        title: 'Lieutenant Governor',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Persdfdue',
        title: 'Lieutenant Governor',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Peradue',
        title: 'Lieutenant Governor',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Perdfue',
        title: 'Lieutenant Governor',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Perdfuae',
        title: 'Lieutenant Governor',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Perddue',
        title: 'Lieutenant Governor',
    }, {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg',
        name: 'David Persdue',
        title: 'Lieutenant Governor',
    },
]


const UsOfficials = () => (
    <FlatList 
        style={styles.scroll}
        data={data}
        keyExtractor={({name}) => name}
        vertical
        renderItem={({item}) => <OfficialInfoCard imageUri={item.imageUri} name={item.name} title={item.title}/>}
    />

       /* { <OfficialInfoCard imageUri={data[0].imageUri} name={data[0].name} title={data[0].title} />
        <OfficialInfoCard imageUri={data[1].imageUri} name={data[1].name} title={data[1].title}/>
    </View> }*/
)

export default UsOfficials;