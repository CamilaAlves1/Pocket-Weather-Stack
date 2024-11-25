import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({ route }) {
  const { weatherData } = route.params;

  if (!weatherData || !weatherData.current) {
    return (
      <View style={styles.container}>
        <Text>Dados não disponíveis.</Text>
      </View>
    );
  }

  const { temperature, weather_descriptions, wind_speed, humidity, weather_icons } = weatherData.current;

  return (
    <View style={styles.container}>
      {/* Quadrado branco com as informações do clima e a frase dentro */}
      <View style={styles.weatherInfoContainer}>
        {/* A frase "Detalhes do Clima" foi movida para dentro do quadrado */}
        <Text style={styles.titleInside}>Dados do Clima</Text>

        <Image 
          source={{ uri: weather_icons[0] }}  // Exibe a imagem do clima (ícone retornado pela API)
          style={styles.weatherIcon}
        />
        <Text style={styles.description}>Descrição: {weather_descriptions[0]}</Text>
        <Text style={styles.text}>Temperatura: {temperature}°C</Text>
        <Text style={styles.text}>Velocidade do Vento: {wind_speed} km/h</Text>
        <Text style={styles.text}>Umidade: {humidity}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54A8FE', // Cor de fundo #54A8FE
    padding: 16,
    justifyContent: 'flex-start', // Alinha o conteúdo para o topo
    alignItems: 'center',
  },
  titleInside: {
    fontSize: 24,
    color: '#000',  // Cor preta para a frase
    marginBottom: 16,  // Espaço entre a frase e as informações
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto
  },
  weatherInfoContainer: {
    backgroundColor: '#fff', // Fundo branco para o quadrado
    padding: 30,  // Aumenta o padding para dar mais espaço
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    marginTop: 20,  // Aumenta o espaçamento entre o título e o quadrado
    elevation: 5, // Sombra para dar um destaque no quadrado
    minHeight: 300, // Aumenta a altura do quadrado
  },
  weatherIcon: {
    width: 100,  // Aumenta o tamanho do ícone
    height: 100, // Aumenta o tamanho do ícone
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});
