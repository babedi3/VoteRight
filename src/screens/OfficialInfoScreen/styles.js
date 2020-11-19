import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    profileContainer: {
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 40,
    },
    text: {
        padding:15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    dataWrapper: {
        maxHeight:450,
    },
    picture: {
        padding:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});

export default styles;