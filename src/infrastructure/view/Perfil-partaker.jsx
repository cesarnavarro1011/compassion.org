import { StyleSheet, ScrollView, Image, View , Text,   } from "react-native";
import CardReportPerfil from "../components/card-report-perfil";
import Header from "../components/layaut/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PerfilPartaker({ route, navigation }) {
    const { db } = route.params;
    return (
        <SafeAreaView style={styles.container__scroll}>
        {/* <Header title="perfil participante"/> */}
            <ScrollView style={styles.container__perfilPartaker}>
                <View style={styles.container_perfilPartaker__coverImage}>
                    <Image style={styles.container_perfilPartaker__background_image} blurRadius={5} source={db.foto}/>
                    <Image style={styles.container_perfilPartaker__perfil} source={db.foto}/>
                </View>
                <View style={styles.container__data}>
                    <View style={styles.container_data__group}>
                        <Text style={styles.container_data__name}>{db.nombre}</Text>
                        <View style={styles.container_data__details}>
                            <Text style={styles.container_data_details__information}>Información</Text>
                            <Text style={styles.container_data_details__title}>ID</Text>
                            <Text style={styles.container_data_details__text}>CO058100{db.id}</Text>
                            <Text style={styles.container_data_details__title}>Grupo etario</Text>
                            <Text style={styles.container_data_details__text}>{db.grupoEtario}</Text>
                            <Text style={styles.container_data_details__title}>Sexo</Text>
                            <Text style={styles.container_data_details__text}>{db.genero}</Text>
                            <Text style={styles.container_data_details__title}>Edad</Text>
                            <Text style={styles.container_data_details__text}>{db.edad}</Text>
                            <Text style={styles.container_data_details__title}>Educación</Text>
                            <Text style={styles.container_data_details__text}>{db.educacion}</Text>
                            <Text style={styles.container_data_details__title}>Dirección</Text>
                            <Text style={styles.container_data_details__text}>{db.direccion}</Text>
                            <Text style={styles.container_data_details__title}>Fecha de nacimiento</Text>
                            <Text style={styles.container_data_details__text}>{db.nacimiento}</Text>
                        </View>

                        <View style={styles.container_data__report}>
                            <Text style={styles.container_data_report__reports}>Reporte</Text>

                            <View style={styles.container_data__card_report}>
                                <CardReportPerfil/>
                                <CardReportPerfil/>
                                <CardReportPerfil/>
                                <CardReportPerfil/>
                            </View>
                        </View>
                        <View style={styles.container_data__comunication}>
                        </View>
                    </View>
                </View> 
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container__scroll: {
        // backgroundColor: 'pink',
        height: "100%",
    },

    container__perfilPartaker: {
        // backgroundColor: "#00A6FB",
        width: "100%",
    },

    container_perfilPartaker__coverImage: {
        // backgroundColor: "#fffaf0",
        backgroundColor: "#00A6FB",
        width: "100%",
        height: 190,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 1,
    },
    
    container_perfilPartaker__background_image: {
        position: 'absolute',
        width: "100%",
        height: 190,
        resizeMode: 'cover',
    },

    container_perfilPartaker__perfil: {
        backgroundColor: "#0582CA",
        width: 150,
        height: 150,
        borderRadius: 100,
        position: "absolute",
        top: 80,
        zIndex: 2,
    },

    container__data: {
        backgroundColor: "#fffaf0",
        width: "100%",
        height: "100%",
        padding: 20,
    },

    container_data__group: {
        // backgroundColor: "red",
        marginTop: 30,
    },

    container_data__name: {
        fontSize: 24,
        height: 40,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },

    container_data_details__information: {
        backgroundColor: "#0582CA",
        color: "#FFFFFF",
        fontSize: 22,
        height: 47,
        lineHeight: 47,
        fontWeight: "bold",
        marginBottom: 15,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 3,
    },

    container_data_details__title: {
        fontSize: 21,
        fontWeight: "bold",
        height: 29,
    },

    container_data_details__text: {
        fontSize: 18,
        height: 40,
    },

    container_data__report: {
        height: "auto",
        marginTop: 15,
    },

    container_data_report__reports: {
        backgroundColor: "#0582CA",
        color: "#FFFFFF",
        fontSize: 22,
        height: 47,
        lineHeight: 47,
        fontWeight: "bold",
        marginBottom: 15,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 3,
    },

    container_data__card_report: {
        // backgroundColor: "blue",
        height: "100%",
        width: "auto",
        display: "flex",
        justifyContent: 'space-around',
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 0,
        marginBottom: 50,
    },
})