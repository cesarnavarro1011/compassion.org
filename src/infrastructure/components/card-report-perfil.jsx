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
        backgroundColor: "#0582CA",
        width: "100%",
        height: 85,
        marginBottom: "1%",
        borderRadius: 5,
    },

    container_data_card_report__details_title: {
        // backgroundColor: "green", 
        color: "#FFFFFF",
        fontFamily: "",
        textAlign: "center",
        width: "100%",
        height: 40,
        lineHeight: 40,
        fontWeight: "bold",
        fontSize: 19,
    },

    container_data_card_report__details_status: {
        // backgroundColor: "yellow", 
        color: "#FFFFFF",
        width: "100%",
        height: 50,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",  
        fontSize: 25,
    },
})
