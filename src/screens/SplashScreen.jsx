// Importa os componentes utilizados na tela
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

// Componente da tela de Splash
export default function SplashScreen({ navigation }) {

  return (
    <View style={styles.container}>

      {/* Nome do aplicativo */}
      <Text style={styles.title}>
        Jardim Secreto
      </Text>

      {/* Logo do aplicativo */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      {/* Slogan do aplicativo */}
      <Text style={styles.subtitle}>
        Onde a natureza revela seus pequenos segredos
      </Text>

      {/* Botão para acessar o aplicativo */}
      <TouchableOpacity
        style={styles.buttonCustom}

        // Navega para a tela de Cadastro
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.buttonText}>
          Acessar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

// Arquivo responsável pelos estilos da tela
const styles = StyleSheet.create({

  // Container principal
  container: {
    flex: 1, // ocupa toda a tela

    backgroundColor: "#D9E2D5",

    justifyContent: "center", // centraliza verticalmente

    alignItems: "center", // centraliza horizontalmente
  },

  // Estilo da imagem
  logo: {
    width: 180,
    height: 180,
  },

  // Estilo do título
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4A5D23",
    marginBottom: 10,
  },

  // Estilo do subtítulo
  subtitle: {
    fontSize: 14,
    color: "#4A5D23",
    marginTop: 50,
    marginBottom: 50,
  },

  // Estilo do botão
  buttonCustom: {
    backgroundColor: "#4A5D23",

    paddingVertical: 12,
    paddingHorizontal: 30,

    borderRadius: 10,

    // Adiciona sombra no Android
    elevation: 3,
  },

  // Texto do botão
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});