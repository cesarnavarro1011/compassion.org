import { View, StyleSheet } from "react-native";
import { Button, Text, ScrollView } from "react-native";
import MenuOpcions from "../components/menu-opcions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Menu({navigation}) {
  return (
      <View style={styles.container_submenu}>
        <View style={styles.container_submenu__content_perfil}>
          <View style={styles.content_perfil__perfil}>
          </View>
          <View style={styles.content_perfil__data}>
            <Text style={styles.data__username}>César Navarro</Text>
            <Text style={styles.data__ocupation}>ocupatión</Text>
            <View style={styles.data__button_editar_perfil}>
              <Button title="Ver perfil"           
                onPress={ () => {
                  navigation.navigate('List')
                }}/>
            </View>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({

  container_menu: {
    backgroundColor: "#22AED1",
    width: '100%',
    height: 'auto',
    position: "absolute",
    top: 30,
    display: "flex",
    // alignItems: "flex-end",
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
});