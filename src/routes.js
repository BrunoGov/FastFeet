import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Login';
import Dashboard from './Dashboard'
import Entrega from './Entrega';
import InfoProblema from './InfoProblema';
import VisualizarProblema from './VisualizarProblema';
import ConfirmarEntrega from './ConfirmarEntrega';
import Perfil from './Perfil';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Dashboard" component={Dashboard} />
                <AppStack.Screen name="Entrega" component={Entrega} />
                <AppStack.Screen name="InfoProblema" component={InfoProblema} />
                <AppStack.Screen name="VisualizarProblema" component={VisualizarProblema} />
                <AppStack.Screen name="ConfirmarEntrega" component={ConfirmarEntrega} />
                <AppStack.Screen name="Perfil" component={Perfil} />
            </AppStack.Navigator>
        </NavigationContainer>
        
    );
};
