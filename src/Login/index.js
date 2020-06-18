import React from 'react';
import { Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
    
            <Image source={require('../assets/logo.png')} />
    
            <TextInput
                style={styles.inputLogin}
                placeholder="Informe seu ID de cadastro"
            />
    
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => { navigation.navigate('Dashboard') }}
                style={styles.btnLogin}
            >
                <Text
                style={styles.textBtnLogin}
                >Entrar no sistema</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;