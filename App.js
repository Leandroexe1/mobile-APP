// Importa o componente responsável por gerenciar toda a navegação
import { NavigationContainer } from "@react-navigation/native";

// Importa a navegação principal da aplicação (Stack Navigation)
import StackNavigation from "./src/navigation/stackNavigation";

// Componente principal da aplicação
export default function App() {
  return (
    // O NavigationContainer deve envolver toda a navegação
    // Ele funciona como o "gerenciador" das rotas da aplicação
    <NavigationContainer>
      {/* Carrega a navegação principal */}
      <StackNavigation />
    </NavigationContainer>
  );
}
