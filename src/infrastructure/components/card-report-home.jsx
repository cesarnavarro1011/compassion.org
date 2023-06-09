import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CardReportHome = (props) => {
  
  const { onPress, title, description } = props 
  return (
    <TouchableOpacity 
      style = { styles.container }
      onPress = { onPress }
    >
      <Text style = { styles.container__title }>
        {title}
      </Text>

      <Text style = { styles.container__description}>
        {description}
      </Text>
    </TouchableOpacity>
    
  );
}
export default CardReportHome

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