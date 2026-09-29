import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      {/* Imagem da planta */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1545241047-6083a3684587",
        }}
        style={styles.image}
      />

      {/* Informações do produto */}
      <View style={styles.content}>

        <Text style={styles.name}>
          Monstera Deliciosa
        </Text>

        <Text style={styles.price}>
          R$ 89,90
        </Text>

        <Text style={styles.descriptionTitle}>
          Sobre a planta
        </Text>

        <Text style={styles.description}>
          A Monstera Deliciosa é uma planta tropical conhecida
          por suas folhas grandes e características. É uma ótima
          opção para trazer mais vida e beleza para ambientes
          internos.
        </Text>

        <Text style={styles.quantityTitle}>
          Quantidade disponível
        </Text>

        <Text style={styles.quantity}>
          10 unidades
        </Text>

        {/* Botão de adicionar ao carrinho */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Adicionar ao carrinho
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 350,
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A5D23",
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A5D23",
    marginTop: 10,
  },

  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },

  quantityTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
  },

  quantity: {
    fontSize: 16,
    marginTop: 5,
    color: "#555",
  },

  button: {
    backgroundColor: "#4A5D23",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});