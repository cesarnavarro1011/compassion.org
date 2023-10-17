  import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import CardReportHome from '../components/card-report-home';
import List from './list';
import PerfilPartaker from './Perfil-partaker';
import Header from '../components/layaut/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import db_compassion from "../../../asset/db_compassion";
import db_project from "../../../asset/db_project";
import db_imagesHome from '../../../asset/db_imagesHome';
import Carousel from 'react-native-reanimated-carousel';
import { FlatList } from 'react-native-gesture-handler';

export default function Home({ navigation }) {

  const x_position_db = db_project[0]
    const db = Object.values(x_position_db)[1];
    const data = Object.values(db).filter((x)=>(x.id===22))[0];
    const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="" 
        isBack={true} 
        navigation={navigation}  
      />
      <View style={styles.container_user}>
        <Text  style={styles.container_user__text}>{`Bienvenido`+` `+ data.name}</Text>
      </View>
      <View>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={db_imagesHome}
          scrollAnimationDuration={3000}
          onSnapToItem={(index) => <Image style={styles.content_notice} source={index.image} key={index.id}/>}
          renderItem={({index}) => (
            <View style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              display:'flex',
              justifyContent: 'center'
            }}>{db_imagesHome.map((x) => (
              <Image style={styles.content_notice} source={x.image} key={x.id}/>
            ))}
            </View>
          )}
          />
      </View>

      <View style={styles.container_info}>
        <Text>informacion adicional que pase como su fuece closed ca</Text>
      </View>

      <View style={styles.container_data}>{
        db_compassion.map((db) => (
        <CardReportHome 
          key = {db.id}
          title = {db.name}
          cantidad = {db.cantidad}
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
      marginLeft: 10,
      fontSize: 18,
    },

    content_notice: {
      backgroundColor: '#006494',
      width: "100%",
      height: 230,
      position: 'absolute'
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