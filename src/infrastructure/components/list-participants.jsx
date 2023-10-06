import { StyleSheet, Text, TouchableOpacity, Image, View, } from "react-native";
// import db from "../../../assets/db_info.json";

export default function ListParticipants( props ) { 
    const { db , navigation } = props
  // const imagePerfil = JSON.stringify(db.foto);
    // console.log(imagePerfil)
  return (
      <TouchableOpacity style={styles.participants}
        onPress = {()=> {
          navigation.navigate('PerfilPartaker',{
            db
            })
          }}
      >
        <View style={styles.contentImgParticipants}>
          <Image style={styles.imgParticipants} source={db.foto} keyExtractor={(db) => db.id}/>
        </View>
        <Text style={styles.nameParticipants}>{db.nombre}</Text>
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
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 3,
    textAlign: "center",
    borderRadius: 5,
  },

  contentImgParticipants: {
    width: 50,
    height: 50,
  },

  imgParticipants: {
    backgroundColor: "#0582CA",
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
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