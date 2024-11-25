import 'react-native-gesture-handler'; // Deve ser a primeira importação
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Remove a barra branca do topo na tela Home
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ 
            title: 'Detalhes',  // Título personalizado
            headerStyle: {
              backgroundColor: '#54A8FE', // Cor de fundo da barra de navegação
              elevation: 0, // Remove sombra no Android
              shadowOpacity: 0, // Remove sombra no iOS
            },
            headerTintColor: '#fff', // Cor do texto da barra de navegação
            headerTitleStyle: {
              fontWeight: 'bold', // Fonte em negrito
            },
            headerShown: true, // Exibe a barra de navegação na tela de detalhes
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
