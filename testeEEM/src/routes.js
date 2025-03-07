import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from './pages/Login';
import SchoolList from './pages/SchoolList';
import LoadingSchool from './pages/LoadingSchool';
import SchoolMessages from './pages/SchoolMessages';

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
          <Stack.Screen options={{ headerShown: false }} name="LoadingSchool" component={LoadingSchool} />
          <Stack.Screen options={{ headerShown: false }} name="SchoolMessages" component={SchoolMessages} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
