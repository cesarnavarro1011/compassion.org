import React, {useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet, Text, View, Button,  Alert, Pressable, DrawerLayoutAndroid, Image} from 'react-native';
import Menu from '../../view/menu';

export default function Header() {
  const drawer = useRef(null);

  const navigationView = () => (
    <Menu drawer={drawer}/>
  );
  
  return (
    <DrawerLayoutAndroid style={styles.container_DrawerLayoutAndroid_open}
      ref={drawer}
      drawerWidth={300}
      drawerPosition= "right"
      renderNavigationView={navigationView}
      >
      <View style={styles.container_header}>
      <Image source={{uri:'assets:/img/logos/sembrando_la_preciosa_semilla.gif'}} />
      <Text style={styles.container_header__logo}>LOGO</Text>
      <View style={styles.container_nav}>
      <AntDesign style={styles.container_nav__button_open}
          title="Open"
          name="menuunfold"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </View>
    </DrawerLayoutAndroid>
    
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
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginTop:30,
  },

  container_nav: {
    width: "100%",
  },
  
  container_nav__button_open: {
    fontSize: 40,
    justifyContent: "center",
  },

  container_header__logo: {
    backgroundColor: 'green',
    width: "84%",
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