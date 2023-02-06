import react from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container_header}>
      {/* <Image style={styles.container_header__image} /> */}
      <Text style={styles.container_header__logo}>LOGO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container_header: {
    width: "100%",
    display: "flex",
    backgroundColor: '#red',
    alignItems: "center",
  },

  container_header__logo: {
    
  }
});