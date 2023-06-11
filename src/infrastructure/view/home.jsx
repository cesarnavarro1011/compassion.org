// import * as Constants from 'expo-device';
import { StyleSheet, Text, View } from 'react-native';
import CardReportHome from '../components/card-report-home';
import List from './list';
import PerfilPartaker from './Perfil-partaker';
import Header from '../components/layaut/header';
import { SafeAreaView } from 'react-native-safe-area-context';

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

      <View style={styles.container_notice}>
      </View>

      <View style={styles.container_info}>
        <Text>informacion adicional que pase como su fuece closed ca</Text>
      </View>

      <View style={styles.container_data}>
        <CardReportHome 
          title = "actualizaciones"
          description= "999"
          onPress={ () => {
            navigation.navigate('List')
          }}  
        />
      </View>
    </SafeAreaView>
    
  );
}

  const styles = StyleSheet.create({

    container: {
      // backgroundColor: 'red',
      width: "100%",
      height: "100%",
      // marginTop: Constants.statusBarHeight,
    },

    container_user: {
      // backgroundColor: 'blue',
      width: "100%",
      height: 60,
      display: 'flex',
      justifyContent: 'center',
    },

    container_user__text: {
      color: '#003554',
      marginLeft: 20,
      fontSize: 18,
    },

    container_notice: {
      backgroundColor: 'violet',
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
      justifyContent: 'space-around',
      alignContent: 'center',
      flexWrap: "wrap", 
    },
  });