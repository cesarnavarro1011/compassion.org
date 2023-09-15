import { StyleSheet, Image, View, Button, Text, ScrollView } from "react-native";
import MenuOpcions from "../components/menu-opcions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import db_project from "../../../asset/db_project.json";

export default function CustomDrawerContent({ navigation }) {
    const db = Object.values(db_project)[1];
    const data = db.filter((x)=>(x.id=== 22))[0]
    // console.log(data);
  return (
    <SafeAreaView style={styles.container_menu}>
      <View style={styles.container_submenu}>
        <View style={styles.container_submenu__content_perfil}>

          <Image style={styles.content_perfil__Background} blurRadius={25} source={require('../../../asset/img/perfil/staff/asegurador.png')}/>
          <Image style={styles.content_perfil__perfil} source={require('../../../asset/img/perfil/staff/asegurador.png')}/>
          <View style={styles.content_perfil__data}>
            <Text style={styles.data__username}>{data.name}</Text>
            <Text style={styles.data__ocupation}>{data.ocupation}</Text>
            {/* <View style={styles.data__button_editar_perfil}>
              <Button title="Ver perfil"           
                onPress={ () => {
                  navigation.navigate('List')
                }}/>
            </View> */}
          </View>
        </View>

          <View style={styles.container_submenu__opcions}>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List',{ })}}>
                <MaterialCommunityIcons 
                  style={styles.icon} 
                  name="update" 
                  size={30}
                  />
                <MenuOpcions nameText="Actualizacion"/>
              </TouchableOpacity>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List')}}>
                <AntDesign 
                  style={styles.icon} 
                  name="addusergroup" 
                  size={30}
                  />
                <MenuOpcions nameText="CDPR" />
              </TouchableOpacity>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List')}}>
                <AntDesign 
                  style={styles.icon} 
                  name="medicinebox" 
                  size={30}
                  />
                <MenuOpcions nameText="Revisión Medica"/>
              </TouchableOpacity>
            <TouchableOpacity style={styles.container_submenu_opcions__iconsAndText} onPress={() => {navigation.navigate('List')}}>
                <MaterialCommunityIcons 
                  style={styles.icon} 
                  name="human-male-height" 
                  size={30}
                  />
                <MenuOpcions nameText="Antropometria"/>
              </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
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

  content_perfil__Background: {
    width: '100%',
    height: '100%',
    position: 'absolute', 
    resizeMode: 'cover',
  },

  container_submenu__content_perfil: {
    backgroundColor: "#00A1FB",
    width: '100%',
    height: 260,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: 'relative', resizeMode: 'cover',
  },

  content_perfil__perfil: {
    // backgroundColor: "yellow",
    width: 150,
    height: 150,
    borderRadius: 100,
    zIndex: 100,
    border: "3px solid white",

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
    // backgroundColor: "yellow",
    width: "70%",
    display: "flex",
  },

  container_submenu_opcions__iconsAndText: {
    // backgroundColor: "red",
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
    paddingLeft: 0,
  },

});