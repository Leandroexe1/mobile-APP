import { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Importa a conexão com a API
import api from "../services/api";

export default function RegisterScreen({ navigation }) {

  // Estados para armazenar os dados digitados
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  // Função responsável por realizar o cadastro
  async function handleRegister() {

    console.log("Botão de cadastro clicado");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !password || !confirmPassword) {
      console.log("ERRO: Existem campos vazios.");
      return;
    }

    console.log("Todos os campos foram preenchidos");

    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
      console.log("ERRO: As senhas não coincidem.");
      return;
    }

    console.log("Senhas conferidas");

    try {
      // Faz a requisição POST para a API
      const response = await api.post(
        "/users/register",
        {
          email: email,
          password: password,
        }
      );
      console.log("Cadastro realizado com sucesso!");
      navigation.navigate("Login");

    } catch (error) {

      console.log("Erro no cadastro:", error);

      console.log(
        "Mensagem da API:",
        error.response?.data?.message ||
        "Não foi possível realizar o cadastro."
      );
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Crie sua conta
      </Text>

      <Text style={styles.label}>
        Nome
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"

        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"

        value={email}
        onChangeText={setEmail}

        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry

        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>
        Confirme sua senha
      </Text>

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
    outlineStyle: "none",
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
