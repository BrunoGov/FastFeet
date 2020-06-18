import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    backHeader: {
        backgroundColor: '#7D40E7',
        height: 200
    },
    title: {
        marginTop: Constants.statusBarHeight + 20,
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    backIcon: {
        marginTop: -23,
        marginLeft: 10
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff'
    },
    nameProduto: {
        marginTop: -120,
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    contentProblemas: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
        borderRadius: 5
    },
    textProblema: {
        color: '#333',
        fontSize: 15
    },
    dataProblema: {
        color: '#333',
        fontSize: 15
    }
});

export default styles;