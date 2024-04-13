import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://adamix.net/defensa_civil/def/videos.php')
      .then(response => response.json())
      .then(data => {
        if (data.exito) {
          setVideos(data.datos);
        } else {
          console.error('Error al obtener los datos:', data.mensaje);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.link)} style={styles.videoItem}>
      <Text style={styles.videoTitle}>{item.titulo}</Text>
      <Text style={styles.videoDescription}>{item.descripcion}</Text>
    </TouchableOpacity>
  );

  const handlePress = (link) => {
    Linking.openURL(`https://www.youtube.com/watch?v=${link}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos</Text>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  videoItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#004c98',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#004c98',
  },
  videoDescription: {
    fontSize: 16,
    color: '#555',
  },
});

export default Videos;
