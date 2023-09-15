import { StyleSheet, Text, TouchableOpacity, Image, } from "react-native";
// import db from "../../../assets/db_info.json";

export default function ListParticipants( props ) { 
    const { data , navigation } = props
  return (
      <TouchableOpacity style={styles.participants}
        onPress = {()=> {
          navigation.navigate('PerfilPartaker',{
            data
            })
          }}
      >
        <Image style={styles.imgParticipants} source={require('../../../asset/img/imageDefaut.png')}/>
        <Text style={styles.nameParticipants}>{data.nombre}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  participants: {
    backgroundColor: "#FCF7F8",
    width: "97%",
    height: 70,
    display: 'flex',
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 3,
    paddingTop: 10,
    marginBottom: 3,
    textAlign: "center",
    borderRadius: 5,
  },

  imgParticipants: {
    backgroundColor: "#0582CA",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  nameParticipants: {
    color: "black",
    fontSize: 18,
    width: '100%',
    height: '100%',
    lineHeight: 51,
    paddingLeft: 15,
  },
})