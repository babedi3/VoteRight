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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        alignSelf: 'flex-start',

      },
      container2: {
        flexDirection: "column",
        alignSelf: 'flex-start',
    },
    name: {
        alignSelf: 'stretch',
        flex: 1,
    },
    title: {
        alignSelf: 'stretch',
        flex: 2,
    },
    scroll: {
       maxHeight: 300,
    },
});

export default styles;