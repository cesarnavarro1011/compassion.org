import { StyleSheet, Text, TouchableOpacity, Image, } from "react-native";
import db from "../../../assets/db_info.json";

export default function ListParticipants( props ) { 
    const { key, navigation } = props
  return (
      <TouchableOpacity style={styles.participants}
        onPress = {()=> {
          navigation.navigate('PerfilPartaker',{
              key
            })
          }}
      >
        <Image style={styles.imgParticipants} source={require('../../../assets/img/imageDefaut.png')}/>
        <Text style={styles.nameParticipants}>{db.nombre}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  participants: {
    // backgroundColor: "#00A6FB",
    width: "100%",
    height: 70,
    display: 'flex',
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 15,
    paddingTop: 10,
    marginBottom: 3,
    textAlign: "center",
  },

  imgParticipants: {
    backgroundColor: "#0582CA",
    width: 50,
    height: 50,
    borderRadius: 25,

  },

  nameParticipants: {
    color: "white",
    fontSize: 17,
    width: '100%',
    height: '100%',
    lineHeight: 55,
    paddingLeft: 15,
  },
})