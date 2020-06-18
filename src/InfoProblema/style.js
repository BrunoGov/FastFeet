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
    input: {
        height: 300,
        marginTop: -120,
        backgroundColor: '#fff',
        padding: 20,
        fontSize: 16,
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
    btnEnviar: {
        backgroundColor: '#7D40E7',
        marginTop: 30,
        height: 50,
        borderRadius: 5
    },
    textBtnEnviar: {
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        top: 15,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;