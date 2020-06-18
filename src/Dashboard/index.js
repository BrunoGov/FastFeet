import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import dashboard from './style';
import Perfil from '../Perfil';

function Dashboard(){
    const navigation = useNavigation();

    function logout(){
        navigation.navigate('Login');
    };

    function Detalhes(){
        navigation.navigate('Entrega');
    }

    return(
        <View style={dashboard.container}>
            <StatusBar barStyle="dark-content" />
            
            <View style={dashboard.header}>
                <Avatar
                    rounded
                    size="large"
                    title="BR"
                    overlayContainerStyle={{
                        backgroundColor: '#A28FD0'
                    }}
                />

                <View style={dashboard.headerInfos}>
                    <Text style={dashboard.bemVindo}>Bem vindo de volta,</Text>
                    <Text style={dashboard.nameUser}>Bruno Morais</Text>
                </View>

                <Icons 
                    name="log-out" 
                    onPress={logout} 
                    size={25} 
                    style={dashboard.iconSair} 
                />
            </View>

            <View style={dashboard.titleMain}>
                <Text style={dashboard.entregas}>Entregas</Text>

                <View style={dashboard.optionsPedidos}>
                    <Text style={dashboard.pendentes}>Pendentes</Text>
                    <Text style={dashboard.entregues}>Entregues</Text>
                </View>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={dashboard.cardInfo}>
                    <View style={dashboard.titleCard}>
                        <FontAwesome5 
                            name="shipping-fast" 
                            size={25} 
                            style={dashboard.iconTitleEncomenda} 
                        />
                        <Text style={dashboard.nameEncomenda}>Encomenda 01</Text>
                    </View>
                    
                    <View style={dashboard.hr} />
                    <View style={dashboard.contentCircle}>
                        <View style={dashboard.colorCircle}/>
                        <View style={dashboard.colorCircle}/>
                        <View style={dashboard.outlineCircle}/>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View>
                            <Text style={dashboard.aguardando}>Aguardando</Text>
                            <Text style={dashboard.retirada}>   Retirada</Text>
                        </View>
                        
                        <Text style={dashboard.retiradaMid}>Retirada</Text>
                        <Text style={dashboard.entregue}>Entregue</Text>
                    </View>
                    
                </View>
                <View style={dashboard.footerCard}>
                    <View>
                        <Text style={dashboard.textData}>Data</Text>
                        <Text style={dashboard.data}>14/01/2020</Text>
                    </View>
                    <View>
                        <Text style={dashboard.cidade}>Cidade</Text>
                        <Text style={dashboard.nomeCidade}>Diadema</Text>
                    </View>
                    <Text
                        style={dashboard.detalhes}
                        onPress={Detalhes}
                    >Ver detalhes</Text>
                </View>

                <View style={dashboard.cardInfo}>
                    <View style={dashboard.titleCard}>
                        <FontAwesome5 
                            name="shipping-fast" 
                            size={25} 
                            style={dashboard.iconTitleEncomenda} 
                        />
                        <Text style={dashboard.nameEncomenda}>Encomenda 02</Text>
                    </View>
                    
                    <View style={dashboard.hr} />
                    <View style={dashboard.contentCircle}>
                        <View style={dashboard.colorCircle}/>
                        <View style={dashboard.outlineCircle}/>
                        <View style={dashboard.outlineCircle}/>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View>
                            <Text style={dashboard.aguardando}>Aguardando</Text>
                            <Text style={dashboard.retirada}>   Retirada</Text>
                        </View>
                        
                        <Text style={dashboard.retiradaMid}>Retirada</Text>
                        <Text style={dashboard.entregue}>Entregue</Text>
                    </View>
                    
                </View>
                <View style={dashboard.footerCard}>
                    <View>
                        <Text style={dashboard.textData}>Data</Text>
                        <Text style={dashboard.data}>15/01/2020</Text>
                    </View>
                    <View>
                        <Text style={dashboard.cidade}>Cidade</Text>
                        <Text style={dashboard.nomeCidade}>Rio do Sul</Text>
                    </View>
                    <Text 
                        style={dashboard.detalhes}
                        onPress={Detalhes}
                    >Ver detalhes</Text>
                </View>

                <View style={dashboard.cardInfo}>
                    <View style={dashboard.titleCard}>
                        <FontAwesome5 
                            name="shipping-fast" 
                            size={25} 
                            style={dashboard.iconTitleEncomenda} 
                        />
                        <Text style={dashboard.nameEncomenda}>Encomenda 03</Text>
                    </View>
                    
                    <View style={dashboard.hr} />
                    <View style={dashboard.contentCircle}>
                        <View style={dashboard.colorCircle}/>
                        <View style={dashboard.outlineCircle}/>
                        <View style={dashboard.outlineCircle}/>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View>
                            <Text style={dashboard.aguardando}>Aguardando</Text>
                            <Text style={dashboard.retirada}>   Retirada</Text>
                        </View>
                        
                        <Text style={dashboard.retiradaMid}>Retirada</Text>
                        <Text style={dashboard.entregue}>Entregue</Text>
                    </View>
                    
                </View>
                <View style={dashboard.footerCard}>
                    <View>
                        <Text style={dashboard.textData}>Data</Text>
                        <Text style={dashboard.data}>15/01/2020</Text>
                    </View>
                    <View>
                        <Text style={dashboard.cidade}>Cidade</Text>
                        <Text style={dashboard.nomeCidade}>Rio do Sul</Text>
                    </View>
                    <Text 
                        style={dashboard.detalhes}
                        onPress={Detalhes}
                    >Ver detalhes</Text>
                </View>

                <View style={dashboard.cardInfo}>
                    <View style={dashboard.titleCard}>
                        <FontAwesome5 
                            name="shipping-fast" 
                            size={25} 
                            style={dashboard.iconTitleEncomenda} 
                        />
                        <Text style={dashboard.nameEncomenda}>Encomenda 04</Text>
                    </View>
                    
                    <View style={dashboard.hr} />
                    <View style={dashboard.contentCircle}>
                        <View style={dashboard.colorCircle}/>
                        <View style={dashboard.outlineCircle}/>
                        <View style={dashboard.outlineCircle}/>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View>
                            <Text style={dashboard.aguardando}>Aguardando</Text>
                            <Text style={dashboard.retirada}>   Retirada</Text>
                        </View>
                        
                        <Text style={dashboard.retiradaMid}>Retirada</Text>
                        <Text style={dashboard.entregue}>Entregue</Text>
                    </View>
                    
                </View>
                <View style={dashboard.footerCard}>
                    <View>
                        <Text style={dashboard.textData}>Data</Text>
                        <Text style={dashboard.data}>15/01/2020</Text>
                    </View>
                    <View>
                        <Text style={dashboard.cidade}>Cidade</Text>
                        <Text style={dashboard.nomeCidade}>Rio do Sul</Text>
                    </View>
                    <Text 
                        style={dashboard.detalhes}
                        onPress={Detalhes}
                    >Ver detalhes</Text>
                </View>
            </ScrollView>
            
        </View>
    );
};

<Perfil />

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: 'gray',
        showIcon: true
      }}>
        <Tab.Screen 
            name="Entregas" 
            component={Dashboard} 
            options={{ 
                tabBarIcon: () => {
                    return <Icons name="menu" size={25} />
                }
            }} 
        />
        <Tab.Screen 
            name="Meu Perfil" 
            component={Perfil}
            options={{ 
                tabBarIcon: () => {
                    return <FontAwesome5 name="user-circle" size={25} />
                }
            }} 
        />
      </Tab.Navigator>
  );
}