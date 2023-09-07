import { StyleSheet, Text, TouchableOpacity, Image, } from "react-native";
import db_info from "../../../assets/db_info.json";

export default function ListParticipants( props ) { 
    const { onPress, item, navigation } = props
  return (
    db_info.map((bd) => ( 
      <TouchableOpacity style={styles.participants}
        onPress={ onPress }
        key={bd.id}
        // onPress = {}
      >
        <Image style={styles.imgParticipants} source={require('../../../assets/img/imageDefaut.png')}/>
        <Text style={styles.nameParticipants}>{bd.nombre}</Text>
      </TouchableOpacity>
    )) 
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