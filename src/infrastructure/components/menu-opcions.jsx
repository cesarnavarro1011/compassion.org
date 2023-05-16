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
    backgroundColor: "red",
    width: '100%',
    height: 85,
    borderRadius: 10,
    marginTop: 5,
    padding: 20,

  },

  title: {
    fontSize: 23,
    paddingLeft: 10,
  },

})