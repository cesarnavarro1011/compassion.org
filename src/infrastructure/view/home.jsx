  import { StyleSheet, Text, View } from 'react-native';
import CardReportHome from '../components/card-report-home';
import List from './list';
import PerfilPartaker from './Perfil-partaker';
import Header from '../components/layaut/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import db_info from "../../../assets/db_info.json";
import { Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="" 
        isBack={true} 
        navigation={navigation}  
      />
      <View style={styles.container_user}>
        <Text  style={styles.container_user__text}>Bienvenido Tutor "User"</Text>
      </View>

      <Image style={styles.container_notice} source={require('../../../assets/img/post/postHome.png')}/>

      <View style={styles.container_info}>
        <Text>informacion adicional que pase como su fuece closed ca</Text>
      </View>

      <View style={styles.container_data}>{
        db_info.map((db) => (
        <CardReportHome 
          key = {db.id}
          title = {db.name}
          description= {db.cantidad}
          data = {db}
          onPress={() => {
            navigation.navigate('List',{
              db
            })
          }}  
        />))
        }</View>
    </SafeAreaView>
    
  );
}

  const styles = StyleSheet.create({

    container: {
      backgroundColor: '#FCF7F8',
      width: "100%",
      height: "100%",
    },

    container_user: {
      backgroundColor: 'white',
      width: "100%",
      height: 31,
      display: 'flex',
      justifyContent: 'center',
    },

    container_user__text: {
      
      color: '#003554',
      marginLeft: 20,
      fontSize: 18,
    },

    container_notice: {
      backgroundColor: '#006494',
      width: "100%",
      height: 230,
    },

    container_info: {
      width: "100%",
      height: 35,
      justifyContent: "center",
    },

    container_data: {
      backgroundColor: 'white',
      width: "100%",
      height: "auto",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      flexWrap: "wrap", 
    },
  });