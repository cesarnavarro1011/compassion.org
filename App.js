import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/infrastructure/components/layaut/header';
import Home from "./src/infrastructure/view/home";
import { NavigationContainer } from '@react-navigation/native';
import PerfilPartaker from "./src/infrastructure/components/Perfil-partaker";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header/>
        {/* <Home/> */}
        
        <PerfilPartaker/>
      </View>
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
