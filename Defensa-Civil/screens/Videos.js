import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Videos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Utiliza flex para ocupar todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  title: {
    fontSize: 24, // Establece el tamaño de la fuente
    fontWeight: 'bold', // Aplica negrita a la fuente
  },
});

export default Videos;
