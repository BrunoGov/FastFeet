import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import perfil from './style';

function Perfil(){
    const navigation = useNavigation();

    function logout(){
        navigation.navigate('Login');
    };

    return(
        <View style={perfil.container}>
            <View style={perfil.avatar}>
                <Avatar
                    rounded
                    size="xlarge"
                    title="BR"
                    overlayContainerStyle={{
                        backgroundColor: '#A28FD0'
                    }}
                />
            </View>
            
            <View style={{ marginTop: 30 }}>
                <Text style={perfil.titleDados}>Nome completo</Text>
                <Text style={perfil.dadosUsuario}>Bruno Morais</Text>
            </View>
            
            <View style={{ marginTop: 30 }}>
                <Text style={perfil.titleDados}>Email</Text>
                <Text style={perfil.dadosUsuario}>bmorais794@gmail.com</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={perfil.titleDados}>Data de cadastro</Text>
                <Text style={perfil.dadosUsuario}>10/01/2020</Text>
            </View>

            <TouchableOpacity
                onPress={logout} 
                activeOpacity={0.8}
                style={perfil.btnLogout}
            >
                <Text style={perfil.textBtnLogout}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Perfil;