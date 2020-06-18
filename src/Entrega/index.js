import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Feather as Icons, FontAwesome5 } from '@expo/vector-icons';

import styles from './style';

function Entrega() {
    const navigation = useNavigation();

    function backPage(){
        navigation.goBack();
    };

    function infoProblema(){
        navigation.navigate('InfoProblema');
    };

    function visualizarProblema(){
        navigation.navigate('VisualizarProblema');
    };

    function confirmarEntrega(){
        navigation.navigate('ConfirmarEntrega');
    };

    return (
        <>
            <View style={styles.backHeader}>
                <StatusBar barStyle="light-content" />

                <Text style={styles.title}>Detalhes da encomenda</Text>

                <Icons 
                    name="arrow-left" 
                    size={25} 
                    color="#fff"
                    onPress={backPage}
                    style={styles.backIcon}
                />
            </View>

            <View style={styles.container}>
                <View style={styles.cardDetalhes}>
                    <View style={styles.titleCard}>
                        <FontAwesome5 
                            name="shipping-fast" 
                            size={25} 
                            style={styles.iconTitleEncomenda} 
                        />
                        <Text style={styles.nameEncomenda}>Informações da entrega</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.titleInfoEntrega}>DESTINATÁRIO</Text>
                        <Text style={styles.dadosEntrega}>Bruno Pereira</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.titleInfoEntrega}>ENDEREÇO DE ENTREGA</Text>
                        <Text style={styles.dadosEntrega}>Rua Brasil, 123, Diadema - SP, 09960-580</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.titleInfoEntrega}>PRODUTO</Text>
                        <Text style={styles.dadosEntrega}>Camiseta YXZ</Text>
                    </View>
                </View>

                <View style={styles.cardSituacaoEntrega}>
                    <View style={styles.titleCard}>
                        <Icons 
                            name="calendar" 
                            size={25} 
                            style={styles.iconTitleEncomenda} 
                        />
                        <Text style={styles.nameEncomenda}>Situação da entrega</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.titleInfoEntrega}>STATUS</Text>
                        <Text style={styles.dadosEntrega}>Pendente</Text>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.titleInfoEntrega}>DATA DE RETIRADA</Text>
                            <Text style={styles.dadosEntrega}>14/01/2020</Text>
                        </View>
                        
                        <View>
                            <Text style={styles.titleInfoEntrega}>DATA DE ENTREGA</Text>
                            <Text style={styles.dadosEntrega}>--/--/--</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.contentAcoes}>
                    <View style={styles.acoesEncomenda}>
                        <View style={styles.cardAcoes}>
                            <Icons 
                                name="x-circle" 
                                size={25} 
                                color="#E74040"
                                style={{ textAlign: 'center' }}
                                onPress={infoProblema}
                            />
                            <Text 
                                style={styles.textAcoes}
                                onPress={infoProblema}
                            >Informar</Text>
                            <Text 
                                style={styles.textAcoes}
                                onPress={infoProblema}
                            >Problema</Text>
                        </View>
                    </View>

                    <View style={styles.acoesEncomendaMid}>
                        <View 
                            style={styles.cardAcoes}
                            onPress={visualizarProblema}
                        >
                            <Icons 
                                name="alert-circle" 
                                size={25} 
                                color="#E7BA40" 
                                style={{ textAlign: 'center' }}
                                onPress={visualizarProblema}
                            />
                            <Text 
                                style={styles.textAcoes} 
                                onPress={visualizarProblema}
                            >Visualizar</Text>
                            <Text 
                                style={styles.textAcoes} 
                                onPress={visualizarProblema}
                            >Problemas</Text>
                        </View>
                    </View>

                    <View style={styles.acoesEncomenda}>
                        <View 
                            style={styles.cardAcoes}
                            onPress={confirmarEntrega}
                        >
                            <Icons 
                                name="check-circle" 
                                size={25} 
                                color="#7D40E7"
                                style={{ textAlign: 'center' }}
                                onPress={confirmarEntrega}
                            />
                            <Text 
                                style={styles.textAcoes} 
                                onPress={confirmarEntrega}
                            >Confirmar</Text>
                            <Text 
                                style={styles.textAcoes} 
                                onPress={confirmarEntrega}
                            >Entrega</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Entrega;