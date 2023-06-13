import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



export default function Session() {
    return (
      <View style={styles.container}>
        <View style={styles.container_session}>
          <Text style={styles.container_session__text}>Session</Text>
          <View style={styles.content_session}>
            <View style={styles.content_session__form}>
             <Text style={styles.content_session_form__txt}>Correo</Text>
             <TextInput style={styles.content_session_form__input} type="email" name="correo" id="" />
            </View>
            <View style={styles.content_session__form}>
             <Text style={styles.content_session_form__txt}>Password</Text>
             <TextInput secureTextEntry={true} style={styles.default} />
            </View> 
          </View>
        </View>
      </View>
    );
}
 
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#00A6FB',
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },

    container_session: {
        backgroundColor: 'red',
        width: "100%",
        height: 450,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    container_session__text: {
        fontSize: 27,
    },

    content_session: {
        backgroundColor: 'yellow',
        width: 290,
        height: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    content_session__form: {
        backgroundColor: 'green',
        width: "100%",
        height: 70,
        borderRadius: 5,
        marginBottom: 10,
    },

    content_session_form__txt: {
        fontSize: 19,
    },

    content_session_form__input: {
        fontSize: 19,

    },
});