import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ListParticipants from "../components/list-participants";

export default function List() {

  return (
    <View style={styles.container}>
        <View style={styles.posts}>
      </View>
        <View style={styles.item}>
          <Text style={styles.title}>name of item</Text>
      </View>
    <ScrollView>
        <View style={styles.list}>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
          <ListParticipants/>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    color: "white",
    // marginTop: 15,
  },

  posts: {
    width: '100%',
    height: 120,
    backgroundColor: "red",
    
  },

  item: {
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },

  title: {
    fontSize: 23,
    fontWeight: "bold",
  },

  list: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingLeft: 5,
  },

})