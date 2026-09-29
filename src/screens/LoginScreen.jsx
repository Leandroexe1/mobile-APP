import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert(
        "Atenção",
        "Digite seu e-mail e sua senha."
      );
      return;
    }

    try {
      const usuarioSalvo = await AsyncStorage.getItem(
        "@jardim_secreto_usuario"
      );

      if (!usuarioSalvo) {
        Alert.alert(
          "Conta não encontrada",
          "Cadastre uma conta antes de fazer login."
        );
        return;
      }

      const usuario = JSON.parse(usuarioSalvo);

      const emailDigitado = email.trim().toLowerCase();

      if (
        emailDigitado !== usuario.email ||
        password !== usuario.password
      ) {
        Alert.alert(
          "Login inválido",
          "E-mail ou senha incorretos."
        );
        return;
      }

      await AsyncStorage.setItem(
        "@jardim_secreto_logado",
        "true"
      );

      navigation.navigate("Tabs");
    } catch (error) {
      console.log("Erro no login:", error);

      Alert.alert(
        "Erro",
        "Não foi possível realizar o login."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Faça seu login
      </Text>

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
        autoCorrect={false}
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Não possui uma conta?{" "}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Cadastre-se
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

  registerText: {
    marginTop: 20,
    textAlign: "center",
  },

  registerLink: {
    color: "#4A5D23",
    fontWeight: "bold",
  },
});