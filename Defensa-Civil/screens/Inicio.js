import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Usa flex para ocupar todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  title: {
    fontSize: 24, // Tamaño del texto
    fontWeight: 'bold', // Negrita
  },
});

export default InicioScreen;
