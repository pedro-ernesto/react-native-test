import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from './pages/Login';
import SchoolList from './pages/SchoolList';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutename="Login">
        <Stack.Group screenOptions={{
          headerStyle: { backgroundColor: '#2596be' },
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
        >
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ title: 'Selecione a sessão principal' }} name="SchoolList" component={SchoolList} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
