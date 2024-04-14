import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, ScrollView, Pressable } from 'react-native';
import axios from 'axios';

const NoticiasScreen = () => {
  const [noticias, setNoticias] = useState([]);
  const [selectedNoticia, setSelectedNoticia] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const response = await axios.get('https://adamix.net/defensa_civil/def/noticias.php');
        setNoticias(response.data.datos);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    };

    obtenerNoticias();
  }, []);

  const handleVerDetalles = (noticia) => {
    setSelectedNoticia(noticia);
    setModalVisible(true);
  };

  const renderNoticiaItem = ({ item }) => (
    <Pressable onPress={() => handleVerDetalles(item)} style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: item.foto }} style={{ width: 100, height: 100, marginRight: 16 }} />
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.titulo}</Text>
          <Text>{item.fecha}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={noticias}
        renderItem={renderNoticiaItem}
        keyExtractor={(item) => item.id}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {selectedNoticia && (
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
                {selectedNoticia.titulo}
              </Text>
              <Text style={{ marginBottom: 16 }}>{selectedNoticia.fecha}</Text>
              <Image
                source={{ uri: selectedNoticia.foto }}
                style={{ width: '100%', height: 200, marginBottom: 16 }}
                resizeMode="cover"
              />
              <Text>{selectedNoticia.contenido}</Text>
              <Pressable onPress={() => setModalVisible(false)} style={{ marginTop: 16 }}>
                <Text style={{ color: 'blue' }}>Cerrar</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </Modal>
    </View>
  );
};

export default NoticiasScreen;
