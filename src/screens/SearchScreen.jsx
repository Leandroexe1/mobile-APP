import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>

                <TextInput
                    placeholder="Pesquisar plantas..."
                    placeholderTextColor="#000000"
                    style={styles.input}
                />
                <Ionicons
                    name="search"
                    size={20}
                    color="#000000"
                    style={styles.icon}
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

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#d9e2d5",
        borderRadius: 30,
        paddingHorizontal: 15,
        height: 50,
    },

    icon: {
        marginLeft: 10,
    },

    input: {
        flex: 1,
        outlineStyle: "none",
    },

});