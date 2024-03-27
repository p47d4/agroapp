import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from './app/screens/Login';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Details from './app/screens/Details';
import Home from './app/screens/Home';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Farmers from './app/screens/Farmers';
import Agrodealers from './app/screens/Agrodealers';
import PHFM from './app/screens/PHFM';
import Extensionworker from './app/screens/Extensionworker';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My Home" component={Home} />
      <InsideStack.Screen name="details" component={Details} />
      <InsideStack.Screen name="farmers" component={Farmers} />
      <InsideStack.Screen name="agrodealers" component={Agrodealers} />
      <InsideStack.Screen name="phfm" component={PHFM} />
      <InsideStack.Screen name="extensionworkers" component={Extensionworker} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}