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
    cardDetalhes: {
        backgroundColor: '#fff',
        marginTop: -120,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
        padding: 15,
        borderRadius: 5
    },
    cardSituacaoEntrega: {
        backgroundColor: '#fff',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
        padding: 15,
        borderRadius: 5
    },
    titleCard: {
        flexDirection: 'row'
    },
    iconTitleEncomenda: {
        color: '#7D40E7'
    },
    nameEncomenda: {
        color: '#7D40E7', 
        fontSize: 14, 
        fontWeight: 'bold', 
        marginTop: 5, 
        marginLeft: 5
    },
    titleInfoEntrega: {
        color: '#999999',
        fontSize: 14,
        fontWeight: 'bold'
    },
    dadosEntrega: {
        color: '#333',
        fontSize: 14
    },
    acoesEncomenda: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F8F9FD',
        padding: 30
    },
    acoesEncomendaMid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F8F9FD',
        padding: 30,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#0000001A',
        borderRightColor: '#0000001A'
    },
    textAcoes: {
        color: '#999999',
        fontSize: 12,
        textAlign: 'center'
    },
    cardAcoes: {
        textAlign: 'center'
    },
    contentAcoes: {
        justifyContent: 'space-between',
        flexDirection: 'row', 
        backgroundColor: '#F8F9FD', 
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
    }
});

export default styles;