import react from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button,  Alert, Pressable } from "react-native";

export default function Header() {
  return (
    <View style={styles.container_header}>
      {/* <Image source={{uri:'assets:/img/logos/sembrando_la_preciosa_semilla.gif'}} /> */}
      <Text style={styles.container_header__logo}>LOGO</Text>

      <View style={styles.container_nav}>
        <Text>Inicio</Text>
        <Text>salir</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({

  container_header: {

    backgroundColor: 'steelblue',
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },

  container_nav: {

  },

  container_header__logo: {
    
    backgroundColor: 'green',
    width: "75%",
    lineHeight: 70,
    paddingLeft: 20,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    elevation: 3,
    backgroundColor: 'black',
  },
  
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    position: "absolute",
    zindex: 2,
    right: 20,

  },
});