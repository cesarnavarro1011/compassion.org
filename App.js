import 'react-native-gesture-handler';
import React from "react";
import * as Constants from 'expo-device';
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/infrastructure/components/layaut/header';
import Home from "./src/infrastructure/view/home";
import CustomDrawerContent from "./src/infrastructure/view/CustomDrawerContent";
import PerfilPartaker from "./src/infrastructure/view/Perfil-partaker";
import List from "./src/infrastructure/view/list";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const  headerShown = () => ({
  headerShown: false
})

function HomeStack() {

  return (
    <Stack.Navigator
    initialRouteName='Home'
    >
      <Stack.Screen 
        name="Home"
        component={Home}
        options = {headerShown}
      />
      <Stack.Screen 
        name="List"
        component={List}
        options = {headerShown}
      />
      <Stack.Screen 
        name="PerfilPartaker" 
        component={PerfilPartaker}
        options = {headerShown}
      />
    </Stack.Navigator>
  );
} 

function PerfilStack() {
  return (
    <Stack.Navigator
    initialRouteName='perfil'
    >
      <Stack.Screen 
        name="PerfilPartaker" 
        component={PerfilPartaker}
        options = {headerShown}
      />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
} 

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#00A6FB",
      }}
    >
      <Tab.Screen 
        name = "homeStack" 
        component = {HomeStack} 
        options = {{ 
          tabBarLabel: "Inicio",
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name='home' color={color} size={size}/>
          ),
        }}
      />  
      <Tab.Screen 
        name = "PerfilStack" 
        component = {PerfilStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <Ionicons name='ios-person-outline' color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen 
        name = "Settings" 
        component = {CustomDrawerContent}
        options = {{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({color, size}) => (
            <Ionicons name='md-settings-outline' color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator> 
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
        <Drawer.Navigator 
          initialRouteName='Menu'
          drawerContent={props => CustomDrawerContent(props)}
          screenOptions={{
            drawerPosition: "right",
          }}
          >
          <Drawer.Screen 
            name="Menu" 
            component={TabNavigation}
            options = {headerShown}
          />
        </Drawer.Navigator>
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
