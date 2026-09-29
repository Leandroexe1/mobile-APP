import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Cart() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Meu Carrinho
      </Text>

      <View style={styles.card}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1545241047-6083a3684587" }}
          style={styles.productImage}
        />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            Cacto Mickey
          </Text>

          <Text style={styles.price}>
            R$20,00
          </Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              -
            </TouchableOpacity>

            <Text style={styles.quantity}>
              1
            </Text>

            <TouchableOpacity style={styles.quantityButton}>
              +
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.removeButton}>
          <Ionicons
            name="trash-outline"
            size={24}
            color="#A33A3A"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzy-Ajrxqytf_TAFLNPv0hnO3plJbwbjFaaiKu36AwA&s=10" }}
          style={styles.productImage}
        />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            Cacto Rabo de Macaco
          </Text>

          <Text style={styles.price}>
            R$35,00
          </Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              -
            </TouchableOpacity>

            <Text style={styles.quantity}>
              1
            </Text>

            <TouchableOpacity style={styles.quantityButton}>
              +
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.removeButton}>
          <Ionicons
            name="trash-outline"
            size={24}
            color="#A33A3A"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>
          Resumo do Pedido
        </Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryPrice}>R$55,00</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Frete</Text>
          <Text style={styles.summaryPrice}>R$10,00</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$65,00</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>Finalizar Compra</TouchableOpacity>
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

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A5D23",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  productImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  productInfo: {
    flex: 1,
    marginLeft: 12,
  },

  productName: {
    fontSize: 17,
    fontWeight: "bold",
  },

  price: {
    fontSize: 16,
    color: "#4A5D23",
    fontWeight: "bold",
    marginTop: 5,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#8DAA81",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "bold",
  },

  removeButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  summary: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A5D23",
    marginBottom: 15,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  summaryText: {
    fontSize: 16,
    color: "#555",
  },

  summaryPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },

  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },

  total: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#4A5D23",
  },

  checkoutButton: {
    backgroundColor: "#4A5D23",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
