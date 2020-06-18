import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const dashboard = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerInfos: {
        flex: 1,
        marginLeft: 15
    },
    iconSair: {
        color: 'red'
    },
    bemVindo: {
        color: '#666666',
        fontSize: 12
    },
    nameUser: {
        color: '#444444',
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 35
    },
    titleMain: {
        flexDirection: 'row',
        marginTop: 30
    },
    optionsPedidos: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row'
    },
    entregas: {
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 22
    },
    pendentes: {
        color: '#7D40E7',
        marginRight: 15,
        textDecorationLine: "underline" 
    },
    cardInfo: {
        backgroundColor: '#fff',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
        padding: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    entregues: {
        color: '#999999',
    },
    hr: {
        borderBottomColor: '#7D40E7',
        borderBottomWidth: 1,
        flex: 1,
        marginHorizontal: 20,
        marginTop: 30
    },
    contentCircle: {
        justifyContent: "space-between", 
        marginHorizontal: 20, 
        alignItems: 'center', 
        flexDirection: 'row', 
        marginTop: -5.5
    },
    colorCircle: {
        height: 10,
        width: 10,
        borderRadius: 60,
        backgroundColor: '#7D40E7',
        
    },
    outlineCircle: {
        height: 10,
        width: 10,
        borderRadius: 60,
        borderTopColor: '#7D40E7',
        borderBottomColor: '#7D40E7',
        borderLeftColor: '#7D40E7',
        borderRightColor: '#7D40E7',
        borderWidth: 1,
        backgroundColor: '#fff'

    },
    footerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F8F9FD',
        padding: 15,
        marginTop: -10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    aguardando: {
        color: '#999999',
        fontSize: 8,
        fontWeight: 'bold', 
        marginTop: 8
    },
    retirada: {
        color: '#999999',
        fontSize: 8, 
        fontWeight: 'bold'
    },
    retiradaMid: {
        color: '#999999', 
        fontSize: 8, 
        fontWeight: 'bold', 
        marginTop: 8, 
        marginLeft: -5
    },
    entregue: {
        color: '#999999', 
        fontSize: 8, 
        fontWeight: 'bold', 
        marginTop: 8, 
        marginRight: 6
    },
    textData: {
        color: '#999999', 
        fontSize: 8, 
        fontWeight: 'bold', 
        marginTop: 8
    },
    data: {
        color: '#444444', 
        fontSize: 12, 
        fontWeight: 'bold'
    },
    cidade: {
        color: '#999999', 
        fontSize: 8, 
        fontWeight: 'bold', 
        marginTop: 8
    },
    nomeCidade: {
        color: '#444444', 
        fontSize: 12, 
        fontWeight: 'bold'
    },
    detalhes: {
        color: '#7D40E7', 
        fontWeight: 'bold',
        marginTop: 13
    },
    titleCard: {
        flexDirection: 'row'
    },
    nameEncomenda: {
        color: '#7D40E7', 
        fontSize: 14, 
        fontWeight: 'bold', 
        marginTop: 5, 
        marginLeft: 5
    },
    iconTitleEncomenda: {
        color: '#7D40E7'
    }
});

export default dashboard;