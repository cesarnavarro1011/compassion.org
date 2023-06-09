import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Touch } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Header } from './src/infrastructure/components/layaut/header';
import { Home } from "./src/infrastructure/view/home";
import Menu from "./src/infrastructure/view/menu";
import { PerfilPartaker } from "./src/infrastructure/view/Perfil-partaker";
import { List } from "./src/infrastructure/view/list";
import { Form } from "react-router-dom";

const MenuDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
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
