import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AlberguesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albergues</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  title: {
    fontSize: 24, // Tamaño del texto
    fontWeight: 'bold', // Peso del texto
  },
});

export default AlberguesScreen;
