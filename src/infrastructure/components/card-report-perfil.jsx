import { View, StyleSheet, Text } from "react-native";

export default function CardReportPerfil() {
    return (
        <View style={styles.container_data_card_report__details}>
            <Text style={styles.container_data_card_report__details_title}>TITLE</Text>
            <Text style={styles.container_data_card_report__details_status}>X</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container_data_card_report__details: {
        backgroundColor: "red",
        width: 150,
        height: 120,
        marginBottom: 5,
        borderRadius: 5,
    },

    container_data_card_report__details_title: {
        // backgroundColor: "green", 
        textAlign: "center",
        width: "100%",
        height: 40,
        lineHeight: 50,
        fontWeight: "bold",
        fontSize: 19,
    },

    container_data_card_report__details_status: {
        // backgroundColor: "yellow", 
        width: "100%",
        height: 80,
        lineHeight: 80,
        fontWeight: "bold",
        textAlign: "center",  
        fontSize: 25,
    },
})
