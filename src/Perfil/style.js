import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const perfil = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        paddingTop: Constants.statusBarHeight + 100,
        backgroundColor: '#fff'
    },
    avatar: {
        alignItems: 'center'
    },
    titleDados:{
        fontSize: 12,
        color: '#666666'
    },
    dadosUsuario: {
        fontSize: 22,
        color: '#444444',
        fontWeight: 'bold'
    },
    btnLogout: {
        backgroundColor: '#E74040',
        marginTop: 30,
        height: 50,
        borderRadius: 5
    },
    textBtnLogout: {
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        top: 15,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default perfil;
