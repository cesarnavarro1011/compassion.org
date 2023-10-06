import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import ListParticipants from "../components/list-participants";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/layaut/header";
import * as Constants from 'expo-device';
// import db_info from "../../../assets/db_info.json";

const List = ({ route, navigation }) => {
  
  const { db } = route.params;
  const dbPosition = Object.values(db)[4];
  const [listPartaker, setListPartker] = useState();
  
  useEffect(()=> {
    setListPartker(dbPosition)
  },[dbPosition])

  return (
    <SafeAreaView style={styles.container}>
    {/* <Header title={db.name}/> */}
      <View style={styles.posts}>
        <Image style={styles.posts_image} source={db.foto}/>
      </View> 
      <View style={styles.item}>
        <Text style={styles.title}>{db.name}</Text>
      </View>
        <View style={styles.list}>
          <FlatList 
            data ={listPartaker}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <ListParticipants
              key={item.id}
              navigation={navigation}
              db = {item}
              />
              )}
          /> 
        </View>
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
    height: 135,
  },

  posts_image: {
    zIndex: 4,
    width: 500,
    height: 170,
  },

  item: {
    // backgroundColor: "#008BDB",
    zIndex: 5,
    height: 30,
    width: '100%',
    height: 35,
    paddingLeft: 10,
  },
  
  title: {
    color: "white",
    height: "auto",
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