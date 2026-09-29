import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Ionicons
                    name="person-circle"
                    size={120}
                    color="#8DAA81"
                />

                <Text style={styles.name}>Talita Favore</Text>
                <Text style={styles.email}>talita@email.com</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Trocar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Visualizar Histórico</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => navigation.navigate("Splash")}
            >
                <Text style={styles.logoutText}>Desconectar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
        justifyContent: "center",
    },

    profileContainer: {
        alignItems: "center",
        marginBottom: 40,
    },

    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
    },

    email: {
        fontSize: 16,
        color: "#777",
        marginTop: 5,
    },

    button: {
        backgroundColor: "#8DAA81",
        width: "100%",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
    },

    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },

    logoutButton: {
        marginTop: 30,
    },
    
    logoutText: {
        color: "#d9534f",
        fontWeight: "bold",
        fontSize: 16,
    },

});