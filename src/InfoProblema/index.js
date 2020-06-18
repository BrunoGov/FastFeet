import React from 'react';
import { Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Feather as Icons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

const InfoProblema = () => {
    const navigation = useNavigation();

    function backPage(){
        navigation.goBack();
    };

    return(
        <>
            <View style={styles.backHeader}>
                <StatusBar barStyle="light-content" />

                <Text style={styles.title}>Informar problema</Text>

                <Icons 
                    name="arrow-left" 
                    size={25} 
                    color="#fff"
                    onPress={backPage}
                    style={styles.backIcon}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                    placeholder="Inclua aqui o problema que ocorreu na entrega."
                    style={styles.input}
                    multiline = {true}
                    numberOfLines = {4}
                />

                <TouchableOpacity
                onPress={() => {}} 
                activeOpacity={0.8}
                style={styles.btnEnviar}
                >
                    <Text style={styles.textBtnEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default InfoProblema;