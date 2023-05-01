import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainContainer from './components/Containers/MainContainer';
import HomeScreen from './components/Screens/HomeScreen';
import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import test2HomeScreen from './components/Screens/HomeScreen';
//@ts-ignore
import ToastManager, { Toast } from 'toastify-react-native';

// import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';

const Stack=createStackNavigator();
/*const Tab=createBottomTabNavigator();*/

/*function MainTabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen}/>
      <Tab.Screen name="Register" component={RegisterScreen}/>
    </Tab.Navigator>
  );
}*/

function App(){

  const showToasts = () => {
    Toast.success('Promised is resolved')
  }

  return(
    <NavigationContainer>
      <ToastManager />
      <Stack.Navigator>
      <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name='Register' options={{headerShown: false}} component={RegisterScreen} />
      <Stack.Screen name="Home" options={{title: 'Return'}} component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
