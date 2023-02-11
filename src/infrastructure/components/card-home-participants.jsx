import { StyleSheet, Text, View } from 'react-native';

export default function CardHomeParticipants() {

  return (
    <View style={styles.container}>
      <Text style={styles.container__title}>TITLE</Text>
      <Text style={styles.container__description}>999</Text>
    </View>
    
  );
}

  const styles = StyleSheet.create({

    container: {
      backgroundColor: 'purple',
      width: 115,
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10, 
    },

    container__title: {
      fontSize: 16,
      height: 30,
    },
    
    container__description: {
      fontSize: 16,
      height: 35,
      fontWeight: 'bold',
    },
  });