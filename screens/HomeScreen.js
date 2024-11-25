import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState('');

  const fetchWeather = async () => {
    const API_KEY = '4efe1594f6755e63024c65f75b90cf14';
    const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

    try {
      const response = await axios.get(URL);
      navigation.navigate('Details', { weatherData: response.data });
    } catch (error) {
      alert('Erro ao buscar dados. Verifique o nome da cidade.');
    }
  };

  return (
    <ImageBackground
      source={require('../images/nuvem.jpg')}  // Caminho atualizado para a pasta 'images'
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Previsão do tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome de uma cidade"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#999" // Cor do texto do placeholder
        />
        <TouchableOpacity style={styles.button} onPress={fetchWeather}>
          <Text style={styles.buttonText}>Buscar clima</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Faz a imagem se adaptar ao tamanho da tela
    justifyContent: 'center', // Centraliza os itens na tela
  },
  container: {
    flex: 1,
    justifyContent: 'center',  // Centraliza os itens verticalmente
    alignItems: 'center',      // Centraliza os itens horizontalmente
    padding: 16,
    position: 'absolute',      // Posiciona a View sobre a imagem de fundo
    width: '100%',             // Garante que a View ocupe toda a largura
    height: '100%',            // Garante que a View ocupe toda a altura
  },
  title: {
    fontSize: 36,  // Aumentando a fonte do título
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '90%', // Aumentando a largura do campo
    borderWidth: 1,
    borderColor: '#ccc',  // Cor da borda da caixa de texto
    backgroundColor: '#fff', // Fundo branco para a caixa de texto
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: '#000', // Cor do texto dentro da caixa (preto)
  },
  button: {
    width: '90%',  // Aumentando a largura do botão
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
