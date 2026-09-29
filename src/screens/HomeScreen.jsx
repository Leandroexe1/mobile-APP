import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}> Olá, visitante! </Text>
      <Text style={styles.subtitle}> Encontre a planta perfeita para o seu lar. </Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
        }}
        style={styles.banner}
      />

      <Text style={styles.sectionTitle}>
        Produtos Populares
      </Text>

       <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1545241047-6083a3684587"
          }}
          style={styles.cardImage}
        />

        <Text style={styles.plantName}>
          Monstera Deliciosa
        </Text>

        <Text style={styles.price}>
          R$ 89,90
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYvaOAkyxl-ZKAKfHtl8PIvkPj1DhdbESvMOpkJ9_0A&s=10"
          }}
          style={styles.cardImage}
        />

        <Text style={styles.plantName}>
          Rosa do deserto
        </Text>

        <Text style={styles.price}>
          R$ 109,90
        </Text>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A5D23",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#665",
    marginTop: 5,
    marginBottom: 20,
  },

  banner: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
    color: "#4A5D23",
  },

  card: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  plantName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    fontSize: 16,
    color: "#4A5D23",
    marginTop: 5,
  }

});