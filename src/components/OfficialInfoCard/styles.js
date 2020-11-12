import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        maxHeight: 150,
    },
});

export default styles;