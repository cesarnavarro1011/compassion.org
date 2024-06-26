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
import Session from './src/infrastructure/view/session';
import PerfilStaff from './src/infrastructure/view/perfil-staff';
const  headerShown = () => ({
  headerShown: false
})
const StackHome = createStackNavigator();

function HomeStack() {

  return (
    <StackHome.Navigator
      initialRouteName='Home'
    >
      <StackHome.Screen 
        name="Home"
        component={Home}
        options = {headerShown}
      />
      <StackHome.Screen 
        name="List"
        component={List}
        options = {headerShown}
      />
      <StackHome.Screen 
        name="PerfilPartaker" 
        component={PerfilPartaker}
        options = {headerShown}
      />
    </StackHome.Navigator>
  );
} 
const StackPerfil = createStackNavigator();

function PerfilStack() {
  return (
    <StackPerfil.Navigator>
      <StackPerfil.Screen 
        name="PerfilPartaker" 
        component={PerfilPartaker}
        options = {headerShown}
      />
      {/* <StackPerfil.Screen name="Profile" component={Profile} /> */}
    </StackPerfil.Navigator>
  );
} 
const Tab = createBottomTabNavigator();

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
          tabBarBadge: 3,
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
          // tabBarBadge: 0
        }}
      />
      <Tab.Screen 
        name = "Settings" 
        component = {PerfilStaff}
        options = {{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({color, size}) => (
            <Ionicons name='md-settings-outline' color={color} size={size}/>
          ),
          tabBarBadge: 1,
        }}
      />
    </Tab.Navigator> 
  )
}
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
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
  )
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
      initialRouteName='Session'
    >
      <StatusBar style="auto"/>
      <StackApp.Navigator>
        <StackApp.Screen 
          name="Session" 
          component={Session}
          options = {headerShown}
        />

        <StackApp.Screen 
          name="AppAcess" 
          component={DrawerNavigator}
          options = {headerShown}
        />
      </StackApp.Navigator>
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
