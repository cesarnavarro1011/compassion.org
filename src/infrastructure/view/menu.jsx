import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native";
import MenuOpcions from "../components/menu-opcions";

export default function Menu() {

  return (
    <View style={styles.container_menu}>
          
      <View style={styles.container_menu__closed}>
        <Button
          style={styles.container_menu_closed__button}
          onPress={""}
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
              <Button style={styles.data__button_editar_perfil} title="Ver perfil" onPress={""}/>
          </View>
        </View>

        <View style={styles.container_submenu__infomation}>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
            <MenuOpcions/>
        </View>

        <View style={styles.container_submenu__exit}>
          <Button style={styles.exit__button_exit} title="Salir" onPress={""}/>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container_menu: {
    backgroundColor: "red",
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 30,
    display: "flex",
    alignItems: "flex-end",
  },

  container_menu__closed: {
    justifyContent: "center",
    width: 80,
    height: 65,
    marginRight: 10,
  },

  container_menu_closed__button: {
    height: 100,
  },

  container_submenu: {
    backgroundColor: "purple",
    width: '100%',
    height: '100%',
    display: "flex",
    alignItems: "center",
  },

  container_submenu__content_perfil: {

    backgroundColor: "blue",
    width: '87%',
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

    backgroundColor: "yellow",
    color: "white",
    width: "100%",
    fontSize: 22,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,

  },

  data__ocupation: {
    paddingLeft: 10,
    paddingBottom: 0,
    height: 25,

  },

  container_submenu__infomation: {

    backgroundColor: "green",
    width: '90%',
    height: 460,
    marginTop: 10,
  },

  container_submenu__exit: {

    backgroundColor: "blue",
    width: '90%',
    height: 40,
    marginTop: 10,
    borderRadius: 10,
  },

  exit__button_exit: {
    height: "100%",
  },

});