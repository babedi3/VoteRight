import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text: {
        padding: 18,
        textAlign: 'center',
        fontSize: 25,
    },
    text2: {
        padding: 18,
        fontSize: 15,
    },
    text3: {
        padding: 18,
        textAlign: 'center',
        fontSize: 20,
        color: 'blue',
    },
    container: {
        flexDirection: "row",
        alignContent: "center",
    },
    container2: {
        flexDirection: "column",
        alignSelf: 'center',
    },
    name: {
        alignSelf: 'center',
        flex: 1,
    },
    name2: {
        alignSelf: 'center',
        flex: 2,
    },
    scroll: {
       maxHeight: 150,
    },
});

export default styles;