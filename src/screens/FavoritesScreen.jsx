import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{

                        uri: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500&auto=format&fit=crop"
                    }}
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.plantName}>Monstera Deliciosa</Text>
                    <Text style={styles.price}>R$ 89,90</Text>
                </View>

                <Ionicons
                    name="heart"
                    size={28}
                    color="#4a5d23"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 15,
        padding: 15,
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    infoContainer: {
        flex: 1,
        marginLeft: 15,
    },

    plantName: {
        fontSize: 18,
        fontWeight: "bold",
    },

    price: {
        marginTop: 5,
        fontSize: 16,
        color: "#4A5D23",
    },
});