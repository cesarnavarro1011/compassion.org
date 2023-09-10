import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ListParticipants from "../components/list-participants";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/layaut/header";
import * as Constants from 'expo-device';
// import db_info from "../../../assets/db_info.json";

const List = ({ route, navigation }) => {
  const { db } = route.params;
  const dbPosition = Object.values(db)[3];

  return (
    <SafeAreaView style={styles.container}>
    <Header title="listado" />
      <View style={styles.posts}>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>{db.name}</Text>
      </View>
      <ScrollView>
        <View style={styles.list}>
          <View style={styles.list}>{
            dbPosition.map((data) => (  
              <ListParticipants
              key={data.id}
              navigation={navigation}
              data = {data}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default List

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    color: "white",
  },

  posts: {
    backgroundColor: "#00A6FB",         
    width: '100%',
    height: 50,
  },

  item: {
    backgroundColor: "#00A6FB",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },

  list: {
    width: '100%',
    height: '100%',
    paddingTop: 2,
    paddingLeft: 2,
    display: 'flex',
    alignItems: 'center',
  },

})