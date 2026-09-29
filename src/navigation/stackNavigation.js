// Importa a função que cria uma navegação em pilha (Stack Navigation)
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa as telas da aplicação
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";

// Importa a navegação por abas (Tab Navigation)
import TabNavigation from "./tabNavigation";

// Cria o objeto Stack que será utilizado para registrar as telas
const Stack = createNativeStackNavigator();

// Componente responsável pela navegação principal do aplicativo
export default function StackNavigation() {
  return (
    // Navigator é o contêiner que gerencia todas as telas da pilha
    <Stack.Navigator>
      {/* Tela inicial do aplicativo */}
      <Stack.Screen
        name="Splash" // Nome utilizado para navegar até esta tela
        component={SplashScreen} // Componente que será exibido
        options={{ headerShown: false }} // Oculta o cabeçalho padrão
      />

      {/* Tela de cadastro */}
      <Stack.Screen
        name="Cadastro"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      {/* Tela de login */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      {/* Navegação por abas */}
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
