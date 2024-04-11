import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ServiciosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Hace que el View ocupe toda la pantalla
    justifyContent: 'center', // Centra el contenido en el eje vertical
    alignItems: 'center', // Centra el contenido en el eje horizontal
  },
  title: {
    fontSize: 24, // Tamaño de la fuente para el título
    fontWeight: 'bold', // Hace que la fuente del título sea en negritas
  },
});

export default ServiciosScreen;
