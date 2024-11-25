// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Adicionar a configuração para importar SVGs corretamente
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

module.exports = config;
