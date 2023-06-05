import { View, StyleSheet } from "react-native";
import { Button, Text, ScrollView } from "react-native";
import MenuOpcions from "../components/menu-opcions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Menu({drawer}) {
  return (
    <ScrollView  style={styles.container_menu}>
      <View style={styles.container_menu__closed}>
        <AntDesign style={styles.container_menu_closed__button}
          name="menufold"
          onPress={() => drawer.current?.closeDrawer()}
          title="Closed"
          color="back"
          accessibilityLabel="closed menu"
        />
      </View>
      <View style={styles.container_submenu}>
        <View style={styles.container_submenu__content_perfil}>
          <View style={styles.content_perfil__perfil}>
          </View>
          <View style={styles.content_perfil__data}>
            <Text style={styles.data__username}>César Navarro</Text>
            <Text style={styles.data__ocupation}>ocupatión</Text>
            <View style={styles.data__button_editar_perfil}>
              <Button title="Ver perfil" onPress={""}/>
            </View>
          </View>
        </View>

        <View style={styles.container_submenu__infomation}>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
        </View>

        <View style={styles.container_submenu__exit}>
        <Text style={styles.exit__text_exit}>Salir</Text>
          <Ionicons style={styles.exit__button_exit} 
            name="md-exit-outline"
            title="Salir" 
            onPress={""}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container_menu: {
    backgroundColor: "#22AED1",
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 30,
    display: "flex",
    // alignItems: "flex-end",
  },

  container_menu__closed: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 60,
    paddingRight: 12,
  },

  container_menu_closed__button: {
    fontSize: 40,
  },

  container_submenu: {
    // backgroundColor: "purple",
    width: '100%',
    height: '100%',
    display: "flex",
    alignItems: "center",
  },

  container_submenu__content_perfil: {
    backgroundColor: "#22AEA9",
    width: '92%',
    height: 105,
    marginTop: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  content_perfil__perfil: {
    backgroundColor: "yellow",
    width: 90,
    height: 90,
    borderRadius: 50,
  },

  content_perfil__data: {
    width: 220,
    height: "100%",
  },

  data__username: {
    // backgroundColor: "yellow",
    color: "white",
    width: "80%",
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 10,
  },

  data__ocupation: {
    paddingLeft: 10,
    paddingBottom: 0,
    height: 25,
  },

  data__button_editar_perfil: {
    width: "80%",
    height: 50,
    paddingLeft: 5,
  },

  container_submenu__infomation: {
    // backgroundColor: "green",
    width: '92%',
    height: "auto",
    marginTop: 10,
  },

  container_submenu__exit: {
    // backgroundColor: "blue",
    width: '100%',
    height: 100,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  exit__text_exit: {
    // backgroundColor: "blue",
    width: '17%',
    lineHeight: 35,
    height: "50%",
    fontSize: 22,
    textAlign: "center",
  },
  
  exit__button_exit: {
    // backgroundColor: "blue",
    width: '20%',
    height: "50%",
    fontSize: 35,
    textAlign: "center",

  },
});