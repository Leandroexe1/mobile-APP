import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const produtos = [
  {
    id: "1",
    nome: "Monstera Deliciosa",
    preco: "R$ 89,90",
    imagem:
      "https://images.unsplash.com/photo-1545241047-6083a3684587",
  },
  {
    id: "2",
    nome: "Rosa do deserto",
    preco: "R$ 109,90",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYvaOAkyxl-ZKAKfHtl8PIvkPj1DhdbESvMOpkJ9_0A&s=10",
  },
];

export default function SearchScreen() {
  const [pesquisa, setPesquisa] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Pesquisar plantas..."
          placeholderTextColor="#000000"
          style={styles.input}
          value={pesquisa}
          onChangeText={setPesquisa}
        />

        <Ionicons
          name="search"
          size={20}
          color="#000000"
          style={styles.icon}
        />
      </View>

      {pesquisa.length > 0 && produtosFiltrados.length === 0 ? (
        <View style={styles.semResultado}>
          <Ionicons name="search-outline" size={50} color="#4A5D23" />

          <Text style={styles.semResultadoTexto}>
            Nenhuma planta encontrada.
          </Text>
        </View>
      ) : (
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image
                source={{ uri: item.imagem }}
                style={styles.imagem}
              />

              <View style={styles.informacoes}>
                <Text style={styles.nome}>{item.nome}</Text>

                <Text style={styles.preco}>{item.preco}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
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

  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
    outlineStyle: "none",
  },

  icon: {
    marginLeft: 10,
  },

  lista: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },

  imagem: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  informacoes: {
    flex: 1,
    marginLeft: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  preco: {
    fontSize: 16,
    color: "#4A5D23",
    marginTop: 8,
    fontWeight: "bold",
  },

  semResultado: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  semResultadoTexto: {
    marginTop: 15,
    fontSize: 17,
    color: "#555",
  },
});
