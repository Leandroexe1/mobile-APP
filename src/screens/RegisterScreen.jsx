import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRegister() {
    if (!nome || !email || !password || !confirmPassword) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Atenção", "As senhas não coincidem.");
      return;
    }

    try {
      const usuario = {
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        password,
      };

      await AsyncStorage.setItem(
        "@jardim_secreto_usuario",
        JSON.stringify(usuario)
      );

      Alert.alert(
        "Cadastro realizado!",
        "Sua conta foi criada com sucesso.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    } catch (error) {
      console.log("Erro ao salvar usuário:", error);

      Alert.alert(
        "Erro",
        "Não foi possível criar sua conta."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>

      <Text style={styles.label}>Nome</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirme sua senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha novamente"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Criar conta
        </Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Já possui uma conta?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Faça o login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 20,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#4A5D23",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "50%",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  loginText: {
    marginTop: 20,
    textAlign: "center",
  },

  loginLink: {
    color: "#4A5D23",
    fontWeight: "bold",
  },
});