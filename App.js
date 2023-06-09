import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/infrastructure/components/layaut/header';
import { Home }  from "./src/infrastructure/view/home";
import Menu from "./src/infrastructure/view/menu";
import PerfilPartaker from "./src/infrastructure/view/Perfil-partaker";
import List from "./src/infrastructure/view/list";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    >
      <Stack.Screen 
        name="Home" component={Home}
      />
      <Stack.Screen name="PerfilPartaker" component={PerfilPartaker} />
      <Stack.Screen name="List" component={List}/>
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
} 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen 
          name = "Home" 
          component = {MyStack} 
          options = {{ headerShown: false }}
        />
        <Tab.Screen 
          name = "perfil" 
          component = {PerfilPartaker}
        />
        <Tab.Screen 
          name = "settings" 
          component = {""}
        />
      </Tab.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: "center",
  },
});
