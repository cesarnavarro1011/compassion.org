import { View, StyleSheet, Text } from "react-native";

export default function MenuOpcions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>name</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#36A4C6",
    width: '100%',
    height: 73,
    borderRadius: 5,
    marginTop: 5,
    paddingTop: 22,
    paddingLeft: 15,
  },

  title: {
    color: "white",
    fontSize: 20,
  },

})