import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7D40E7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputLogin: {
      padding: 13,
      backgroundColor: '#fff',
      width: '90%',
      marginTop: 50,
      borderRadius: 5
    },
    btnLogin: {
      backgroundColor: '#82BF18',
      marginTop: 20,
      width: '90%',
      height: 45,
      borderRadius: 5
    },
    textBtnLogin: {
      textAlign: 'center',
      marginTop: 12,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    }
});

export default styles;