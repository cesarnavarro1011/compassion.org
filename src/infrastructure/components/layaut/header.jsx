import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button,  Alert, Pressable, DrawerLayoutAndroid, } from 'react-native';
import Menu from '../../view/menu';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Constants from 'expo-device';

export default function Header() {
  return (
    <View style={styles.container_header}>
      <View style={styles.container_group_header}>
          <Image style={styles.container_header__logo} source={{uri:'assets:/img/logos/sembrando_la_preciosa_semilla.gif'}} />
      </View>
      <View style={styles.container_group_header}>
        <Text style={styles.container_header__title}>LOGO</Text>
      </View>
      <View style={styles.container_group_header}>
      <AntDesign style={styles.container_nav__button_open}
          title="Open"
          name="menuunfold"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container_DrawerLayoutAndroid_open: {
    backgroundColor: 'steelblue',
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  
  container_DrawerLayoutAndroid_close: {
    display: "flex",
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
  },
  
  container_header: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop:30,
    justifyContent: "space-between",
  },

  container_nav: {
    width: "100%",
  },
  
  container_nav__button_open: {
    width: "100%",
    fontSize: 40,
    justifyContent: "center",
  },

  container_header__logo: {
    backgroundColor: 'green',
    width: "84%",
    height: 60,
    lineHeight: 70,
    paddingLeft: 20,
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