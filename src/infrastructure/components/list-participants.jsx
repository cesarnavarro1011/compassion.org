import { StyleSheet, Text, TouchableOpacity, Image, } from "react-native";

export default function ListParticipants(props){ 
    const { onPress, name } = props

  return (
      <TouchableOpacity style={styles.participants}
        onPress={ onPress }
      >
        <Image style={styles.imgParticipants} source={require('../../../assets/img/imageDefaut.png')}/>
        <Text style={styles.nameParticipants}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  participants: {
    backgroundColor: "#00A6FB",
    width: "100%",
    height: 70,
    display: 'flex',
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 15,
    paddingTop: 10,
    marginBottom: 10,
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
    fontSize: 18,
    width: '100%',
    height: '100%',
    lineHeight: 44,
    paddingLeft: 15,
  },
})