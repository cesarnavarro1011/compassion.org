import { View, StyleSheet } from "react-native";
import { Button, Text, ScrollView } from "react-native";
import MenuOpcions from "../components/menu-opcions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container_menu}>
      <View style={styles.container_submenu}>
        <View style={styles.container_submenu__content_perfil}>
          <View style={styles.content_perfil__perfil}></View>
          <View style={styles.content_perfil__data}>
            <Text style={styles.data__username}>César Navarro</Text>
            <Text style={styles.data__ocupation}>ocupatión</Text>
            {/* <View style={styles.data__button_editar_perfil}>
              <Button title="Ver perfil"           
                onPress={ () => {
                  navigation.navigate('List')
                }}/>
            </View> */}
          </View>
        </View>

          <View style={styles.container_submenu__opcions}>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List')}}>
              <MaterialCommunityIcons style={styles.icon} name="update" size={30}/>
              <MenuOpcions nameText="Actualizacion"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List')}}>
              <AntDesign style={styles.icon} name="addusergroup" size={30}/>
              <MenuOpcions nameText="CDPR" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List')}}>
              <AntDesign style={styles.icon} name="medicinebox" size={30}/>
              <MenuOpcions nameText="Revisión Medica"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List')}}>
              <MaterialCommunityIcons style={styles.icon} name="human-male-height" size={30}/>
              <MenuOpcions nameText="Antropometria"/>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container_menu: {
    backgroundColor: "#00A6FB",
    width: '100%',
    height: '100%',
    position: "absolute",
    display: "flex",

  },
  
  container_submenu: {
    // backgroundColor: "purple",
    width: '100%',
    height: '100%',
    display: "flex",
    alignItems: "center",
  },

  container_submenu__content_perfil: {
    backgroundColor: "#00A6FB",
    width: '100%',
    height: 270,
    paddingTop: 40,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    blurRadius: 90,
  },

  content_perfil__perfil: {
    backgroundColor: "yellow",
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  content_perfil__data: {
    // backgroundColor: "yellow",
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
  },

  data__username: {
    // backgroundColor: "yellow",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    borderBottom: 10,
    borderColor: "black",
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 10,
    textAlign: "center",
  },

  data__ocupation: {
    color: "white",
    paddingLeft: 10,
    paddingBottom: 0,
    // height: 25,
  },

  // data__button_editar_perfil: {
  //   width: "80%",
  //   height: 50,
  //   paddingLeft: 5,
  // },

  container_submenu__opcions: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    // backgroundColor: "red",
  },

  container_submenu_opcions__iconsAndText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  
  icon: {
    backgroundColor: "#00A6FB",
    height: 70,
    color: "white",
    // marginTop: 6,
    paddingTop: 18,
    paddingLeft: 20,
  },

});