import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MenuOpcions({ nameText }) {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{nameText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A6FB",
    height: "100%",
    width: '90%',
    height: 70,
    paddingTop: 22,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },

  title: {
    height: "100%",
    color: "white",
    fontSize: 15,
  },
})