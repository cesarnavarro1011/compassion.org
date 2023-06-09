import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ListParticipants(props){ 
    const { onPress, name } = props

  return (
      <TouchableOpacity style={styles.participants}
        onPress={ onPress }
      >
        <Image style={styles.imgParticipants}/>
        <Text style={styles.nameParticipants}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  participants: {
    backgroundColor: "red",
    width: "100%",
    height: 70,
    display: 'flex',
    flexDirection: "row",
    alignContent: "center",
    paddingLeft: 15,
    paddingTop: 10,
    marginBottom: 10,
    textAlign: "center",
    borderRadius: 12,
  },

  imgParticipants: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",

  },

  nameParticipants: {
    fontSize: 18,
    width: '100%',
    height: '100%',
    lineHeight: 44,
    paddingLeft: 25,
  },
})