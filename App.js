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
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function CustomHeader () {
//   return (

//   )
// }

// function MyStack() {
//   return (
//     <Stack.Navigator
//     initialRouteName='Home'
//     >
//       <Stack.Screen 
//         name="Home" component={MyTab}
//         options = {{ headerShown: false }}
//       />
//       <Stack.Screen 
//         name="PerfilPartaker" 
//         component={PerfilPartaker}
//         options = {{ headerShown: false }}
//       />
//       <Stack.Screen 
//         name="List" 
//         component={List}
//         options = {{ headerShown: false }}
//       />
//       {/* <Stack.Screen name="Profile" component={Profile} /> */}
//     </Stack.Navigator>
//   );
// } 

// function MyTab () {
//   return (
//     <Tab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: "#0075F2",
//         }}
//       >
//         <Tab.Screen 
//           name = "Home" 
//           component = {Home} 
//           options = {{ 
//             tabBarLabel: "Inicio",
//             headerShown: false,
//             tabBarIcon: ({color, size}) => (
//               <AntDesign name='home' color={color} size={size}/>
//             ),
//           }}
//         />  
//         <Tab.Screen 
//           name = "perfil" 
//           component = {PerfilPartaker}
//           options={{
//             headerShown: false,
//             tabBarLabel: 'Perfil',
//             tabBarIcon: ({color, size}) => (
//               <Ionicons name='ios-person-outline' color={color} size={size}/>
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name = "Settings" 
//           component = {""}
//           options = {{
//             headerShown: false,
//             tabBarLabel: "Settings",
//             tabBarIcon: ({color, size}) => (
//               <Ionicons name='md-settings-outline' color={color} size={size}/>
//             ),
//           }}
//         />
//       </Tab.Navigator>  
//   );
// }

export default function App() {
  return (
    // <NavigationContainer>
    //   <StatusBar style="auto" />
    //   <Drawer.Navigator>
    //       <Drawer.Screen 
    //       name="Home" 
    //       component={MyStack}
    //     />
    //     <Drawer.Screen 
    //       name="Actualizaciones" 
    //       component={List}
    //     />
    //     <Drawer.Screen 
    //       name="CDPR" 
    //       component={List}
    //     />
    //     <Drawer.Screen 
    //       name="Antropometria" 
    //       component={List}
    //     />
    //       <Drawer.Screen 
    //       name="menu" 
    //       component={Menu}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Screen name="header" component={Header}/>
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
