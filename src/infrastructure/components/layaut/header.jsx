import { StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Constants from 'expo-device';
import { Ionicons } from '@expo/vector-icons';

export default function Header({title, isBack, navigation }) {

  return (
    <View style={styles.container_header}>
      <View style={styles.subcontainer_header}> 
      {
        isBack ? 
          <View style={styles.container_group_header}>
              <Image style={styles.container_header__logo} source={require('../../../../assets/img/logos/sembrando_la_preciosa_semilla.png')} />
          </View>
        : 
        <Ionicons style={styles.container_nav__button_back}
          title = "Open"
          name = "md-chevron-back"
          // onPress = {navigation.goBack()}
        />
      } 
          <View style={styles.container_group_header}>
            <Text style={styles.container_header__title}>{title}</Text>
          </View>
      {
        isBack ?   
          <View style={styles.container_group_header}>
          <Ionicons style={styles.container_nav__button_open}
              title="Open"
              color="white"
              name="menu-outline"
              onPress={() => navigation.openDrawer()}
            />
          </View> 
        : 
        <View style={styles.empty}></View>
      }      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container_header: {
    backgroundColor: '#00A6FB',
    // opacity: 0.5,
    // blurRadius: 1,
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: Constants.statusBarHeight,
    // marginTop: 30,
  },

  subcontainer_header: {
    // backgroundColor: 'blue',
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
  },
  
  container_group_header: {
    // backgroundColor: 'yellow',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "100%",
  },

  container_header__logo: {
    // backgroundColor: 'green',
    width: 45,
    height: 45,
    // lineHeight: 70,
    paddingLeft: 20,
    zIndex: 100,
  },

  container_nav__button_back: {
    fontSize: 35,
  },

  container_header__title: {
    color: "#FFFFFF",
    width: "100%",
    height: "100%",
    lineHeight: 70,
    paddingLeft: 20,
  },

  container_nav__button_open: {
    width: "100%",
    fontSize: 40,
    textAlign: "right",
  },

  empty: {
    width: "10%",
  },

  container_header__title: {
    width: "100%",
    fontSize: 18,
    textAlign: "center",
  },

  text: {
    width: "100%",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    position: "absolute",
    zindex: 2,
    right: 20,
  },
});