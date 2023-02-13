import {  View , Text, StyleSheet } from "react-native";

export default function PerfilPartaker() {
    return (
        <View style={styles.container__perfilPartaker }>
            <View style={styles.container__data}>
                <View style={styles.container_data__coverImage}>
                    <View style={styles.container_data__perfil}>
                    </View> 
                </View>
                <View style={styles.container__information}>
                    <View style={styles.container_information__text}>
                        <Text style={styles.container_information_text__name}>Merlys Jhoana De La Hoz Lazo</Text>
                        <Text style={styles.container_information_text__group}>Información</Text>
                        <Text style={styles.container_information_text__title}>Edad</Text>
                        <Text style={styles.container_information_text__data}>18 Years 11 Months</Text>
                        <Text style={styles.container_information_text__title}>Sexo</Text>
                        <Text style={styles.container_information_text__data}>Female</Text>
                        <Text style={styles.container_information_text__title}>Grupo etario</Text>
                        <Text style={styles.container_information_text__data}>15-18</Text>
                        <Text style={styles.container_information_text__title}>Educación</Text>
                        <Text style={styles.container_information_text__data}>Culminado</Text>
                        <Text style={styles.container_information_text__title}>Dirección</Text>
                        <Text style={styles.container_information_text__data}>Calle 13 A #43-92</Text>
                    </View>
                </View> 
            </View>

            <View style={styles.container__report}>
            </View>

            <View style={styles.container__comunication}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container__perfilPartaker: {
        // backgroundColor: "blue",
        width: "100%",
        height: "100%",
    },

    container__data: {
        // backgroundColor: "red",
        width: "100%",
        height: 500,
    },

    container_data__coverImage: {
        backgroundColor: "yellow",
        width: "100%",
        height: 190,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 1,
    },

    container_data__perfil: {
        backgroundColor: "blue",
        width: 150,
        height: 150,
        borderRadius: 100,
        position: "absolute",
        top: 80,
        zIndex: 2,
    },

    container__information: {
        backgroundColor: "#fffaf0",
        width: "100%",
        height: "auto",
        padding: 20,
    },

    container_information__text: {
        // backgroundColor: "red",
        marginTop: 40,
    },

    container_information_text__name: {
        fontSize: 23,
        height: 55,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },

    container_information_text__group: {

    },

    container_information_text__title: {
        fontSize: 21,
        fontWeight: "bold",
        height: 29,
    },

    container_information_text__data: {
        fontSize: 18,
        height: 42,
    },
    
})