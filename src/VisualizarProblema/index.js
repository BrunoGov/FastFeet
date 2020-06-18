import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Feather as Icons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const VisualizarProblema = () => {
    const navigation = useNavigation();

    function backPage(){
        navigation.goBack();
    };

    return(
        <>
            <View style={styles.backHeader}>
                <StatusBar barStyle="light-content" />

                <Text style={styles.title}>Visualizar problemas</Text>

                <Icons 
                    name="arrow-left" 
                    size={25} 
                    color="#fff"
                    onPress={backPage}
                    style={styles.backIcon}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.nameProduto}>Encomenda 01</Text>

                <View style={styles.contentProblemas}>
                    <Text style={styles.textProblema}>Destinatário ausente</Text>
                    <Text style={styles.dataProblema}>14/01/2020</Text>
                </View>

                <View style={styles.contentProblemas}>
                    <Text style={styles.textProblema}>Destinatário ausente</Text>
                    <Text style={styles.dataProblema}>14/01/2020</Text>
                </View>
            </View>
        </>
    );
};

export default VisualizarProblema;