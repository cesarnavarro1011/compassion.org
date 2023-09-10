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
      backgroundColor: '#49B6FF',
      width: "47%",
      height: 110,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10, 
    },

    container__title: {
      color: '#FFFFFF',
      fontSize: 18,
      height: 35,
    },
    
    container__description: {
      color: '#FFFFFF',
      fontSize: 18,
      height: 35,
      fontWeight: 'bold',
      alignContent: 'center',
    },
  });