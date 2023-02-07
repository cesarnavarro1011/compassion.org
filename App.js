import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/infrastructure/components/layaut/header';
import Home from "./src/infrastructure/view/home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <Home/>
    </View>
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
