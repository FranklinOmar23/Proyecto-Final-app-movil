import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HistoriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos</Text>
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
    fontSize: 24, // Define el tamaño del texto
    fontWeight: 'bold', // Aplica negrita al texto
  },
});

export default HistoriaScreen;
``
