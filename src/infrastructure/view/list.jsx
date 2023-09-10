import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ListParticipants from "../components/list-participants";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/layaut/header";
import * as Constants from 'expo-device';
// import db_info from "../../../assets/db_info.json";

const List = ({ route, navigation }) => {
  const { db } = route.params;
  const dbPosition = Object.values(db)[4];
// const loadImage = imageName => (require(`../../../assets/img/post/${imageName}`).default);
  return (
    <SafeAreaView style={styles.container}>
    <Header title="listado" />
      <View style={styles.posts}>
        {/* <Image style={styles.posts_image} source={loadImage(db.foto)}/> */}
      </View> 
      <View style={styles.item}>
        <Text style={styles.title}>{db.foto}</Text>
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
    zIndex: 2,
    width: '100%',
    height: '100%',
    color: "white",
  },

  posts: {
    zIndex: 3,
    backgroundColor: "#00A6FB",         
    width: '100%',
    height: 120,
  },

  posts_image: {
    zIndex: 4,
    width: 500,
    height: 155,
  },

  item: {
    backgroundColor: "transparent",
    zIndex: 5,
    height: 30,
    width: '100%',
    height: 35,
    paddingLeft: 10,
  },
  
  title: {
    color: "white",
    color: "black",
    height: 35,
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