import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/infrastructure/components/layaut/header';
import { Home } from "./src/infrastructure/view/home";
import { NavigationContainer } from '@react-navigation/native';
import Menu from "./src/infrastructure/view/menu";
import PerfilPartaker from "./src/infrastructure/view/Perfil-partaker";
import List from "./src/infrastructure/view/list";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //   <StatusBar style="auto" />
    //     {/* <Home/> */}
    //     {/* <PerfilPartaker/> */}
    //     {/* <Menu/> */}
    //     {/* <List/> */}
    //   </View>
    // </NavigationContainer>
    // <Header/>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PerfilPartaker" component={PerfilPartaker} />
        <Stack.Screen name="List" component={List} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
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
