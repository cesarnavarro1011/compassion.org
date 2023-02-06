import react from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button,  Alert, Pressable } from "react-native";

export default function Header() {
  return (
    <View style={styles.container_header}>
      {/* <Image source={{uri:'assets:/img/logos/sembrando_la_preciosa_semilla.gif'}} /> */}
      <Text style={styles.container_header__logo}>LOGO</Text>

      <Pressable style={styles.button} >
        <Text style={styles.text}>button</Text>
      </Pressable>
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
    position: absolute,
    zindex: 2,
    right: 20,
    /* left: 20px; */
    top: 20,
    height: 50,
    width: 50,
    textalign: center,
    lineheight: 50,
    borderRadius: 50,
    fontsize: 20,
    color: white,
    cursor: pointer,
    /*background: linear-gradient(-135deg, #c850c0, #4158d0);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
   /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
    background: black,
    // transition: all 0.3s ease-in-out,
  },
});