import {  View , Text, StyleSheet, ScrollView  } from "react-native";
import CardReportPerfil from "../components/card-report-perfil";

export default function PerfilPartaker() {
    return (
        <ScrollView style={styles.container__scroll}>
            <View style={styles.container__perfilPartaker}>
                <View style={styles.container_perfilPartaker__coverImage}>
                    <View style={styles.container_perfilPartaker__perfil}>
                    </View> 
                </View>
                <View style={styles.container__data}>
                    <View style={styles.container_data__group}>
                        <Text style={styles.container_data__name}>Merlys Jhoana De La Hoz Lazo</Text>
                        <View style={styles.container_data__details}>
                            <Text style={styles.container_data_details__information}>Información</Text>
                            <Text style={styles.container_data_details__title}>ID</Text>
                            <Text style={styles.container_data_details__text}>CO05810000</Text>
                            <Text style={styles.container_data_details__title}>Grupo etario</Text>
                            <Text style={styles.container_data_details__text}>15-18</Text>
                            <Text style={styles.container_data_details__title}>Sexo</Text>
                            <Text style={styles.container_data_details__text}>Female</Text>
                            <Text style={styles.container_data_details__title}>Edad</Text>
                            <Text style={styles.container_data_details__text}>18 Years 11 Months</Text>
                            <Text style={styles.container_data_details__title}>Educación</Text>
                            <Text style={styles.container_data_details__text}>Culminado</Text>
                            <Text style={styles.container_data_details__title}>Dirección</Text>
                            <Text style={styles.container_data_details__text}>Calle 13 A #43-92</Text>
                            <Text style={styles.container_data_details__title}>Fecha de nacimiento</Text>
                            <Text style={styles.container_data_details__text}>11/11/2000</Text>
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
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container__scroll: {
        backgroundColor: 'pink',
    },

    container__perfilPartaker: {
        backgroundColor: "red",
        width: "100%",
        height: "auto",
    },

    container_perfilPartaker__coverImage: {
        backgroundColor: "yellow",
        width: "100%",
        height: 190,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 1,
    },

    container_perfilPartaker__perfil: {
        backgroundColor: "blue",
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
        height: "auto",
        padding: 20,
    },

    container_data__group: {
        // backgroundColor: "red",
        marginTop: 40,
    },

    container_data__name: {
        fontSize: 23,
        height: 55,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },

    container_data_details__information: {
        backgroundColor: "#2f4f4f",
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
        backgroundColor: "#2f4f4f",
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
        paddingTop: 20,
    },
})