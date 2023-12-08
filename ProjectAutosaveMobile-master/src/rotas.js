import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Cadastro2 } from './pages/Cadastro_2';
import { Cadastro3 } from './pages/Cadastro_3';
import { ListaFretes } from './pages/ListaFretes';

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="Cadastro3" component={Cadastro3} />
        <Stack.Screen name="ListaFretes" component={ListaFretes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
