import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ListParticipants from "../components/list-participants";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/layaut/header";

const List = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
    <Header title="listado" />
      <View style={styles.posts}>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>name of item</Text>
      </View>
      <ScrollView>
        <View style={styles.list}>
          <ListParticipants 
          name = "Jhoana marcela benitez pertuz"
          onPress = { ()=> {
            navigation.navigate('PerfilPartaker')
          }}/>
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
    // marginTop: 15,
  },

  posts: {
    backgroundColor: "#00A6FB",         
    width: '100%',
    height: 120,
    
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
    paddingTop: 20,
    paddingLeft: 2,
  },

})