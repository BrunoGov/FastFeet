import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    backHeader: {
        backgroundColor: '#7D40E7',
        height: 200
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff'
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
    btnEnviar: {
        backgroundColor: '#7D40E7',
        marginTop: 30,
        height: 50,
        borderRadius: 5
    },
    textBtnText: {
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        top: 15,
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonCamera: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9e9e9e6e',
        margin: 20,
        borderRadius: 10,
        padding: 10,
        height: 60,
        borderRadius: 100,
        width: 60,
    },
    contentButtonCamera: {
        flex: 1, 
        justifyContent: 'center',
        bottom: 0, 
        position: 'absolute', 
        marginLeft: '36%'
    },
    btnNovaFoto: {
        backgroundColor: '#E74040',
        marginTop: 15,
        height: 50,
        borderRadius: 5,
        width: '100%',
        position: 'absolute'
    },
    textNovaFoto: {
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        top: 15,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles;