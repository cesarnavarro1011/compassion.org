import { StyleSheet, Text, View } from 'react-native';
import CardReportHome from '../components/card-report-home';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.container_user}>
        <Text  style={styles.container_user__text}>Bienvenido Tutor "User"</Text>
      </View>

      <View style={styles.container_notice}>
      </View>

      <View style={styles.container_info}>
        <Text>informacion adicional que pase como su fuece closed ca</Text>
      </View>

      <View style={styles.container_data}>
        <CardReportHome/>
        <CardReportHome/>
        <CardReportHome/>
        <CardReportHome/>
        <CardReportHome/>
        <CardReportHome/>
      </View>
    </View>
    
  );
}

  const styles = StyleSheet.create({

    container: {
      // backgroundColor: 'red',
      width: "100%",
      height: "100%",
    },

    container_user: {
      backgroundColor: 'blue',
      width: "100%",
      height: 60,
      display: 'flex',
      justifyContent: 'center',
    },

    container_user__text: {
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
      flexWrap: "wrap", 
    },
  });