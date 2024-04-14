


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Modal, ScrollView, Picker, TextInput, Pressable } from 'react-native';
import axios from 'axios';

const AlberguesScreen = () => {
  const [albergues, setAlbergues] = useState([]);
  const [filteredAlbergues, setFilteredAlbergues] = useState([]);
  const [selectedAlbergue, setSelectedAlbergue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterType, setFilterType] = useState('edificio'); // Default filter type is 'edificio'
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const obtenerAlbergues = async () => {
      try {
        const response = await axios.get('https://adamix.net/defensa_civil/def/albergues.php');
        setAlbergues(response.data.datos);
        setFilteredAlbergues(response.data.datos);
      } catch (error) {
        console.error('Error al obtener albergues:', error);
      }
    };

    obtenerAlbergues();
  }, []);

  useEffect(() => {
    // Filtrar albergues basado en el tipo de filtro seleccionado
    const resultadosFiltrados = albergues.filter((albergue) => {
      const valorFiltrado = albergue[filterType].toLowerCase();
      const valorBuscado = searchQuery.toLowerCase();
      return valorFiltrado.includes(valorBuscado);
    });
    setFilteredAlbergues(resultadosFiltrados);
  }, [searchQuery, filterType, albergues]);

  const handleVerDetalles = (albergue) => {
    setSelectedAlbergue(albergue);
    setModalVisible(true);
  };

  const renderAlbergueItem = ({ item }) => (
    <Pressable onPress={() => handleVerDetalles(item)} style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.edificio}</Text>
      <Text>{item.ciudad}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
        <TextInput
          placeholder={`Buscar por ${filterType}`}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={{
            flex: 1,
            marginLeft: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
          }}
        />
        <Picker
          selectedValue={filterType}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setFilterType(itemValue)}
        >
          <Picker.Item label="Edificio" value="edificio" />
          <Picker.Item label="Ciudad" value="ciudad" />
          <Picker.Item label="Coordinador" value="coordinador" />
          <Picker.Item label="Código" value="codigo" />
        </Picker>
      </View>
      <FlatList
        data={filteredAlbergues}
        renderItem={renderAlbergueItem}
        keyExtractor={(item) => item.codigo}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {selectedAlbergue && (
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
                {selectedAlbergue.edificio}
              </Text>
              <Text>{selectedAlbergue.ciudad}</Text>
              <Text>Coordinador: {selectedAlbergue.coordinador}</Text>
              <Text>Teléfono: {selectedAlbergue.telefono}</Text>
              <Text>Capacidad: {selectedAlbergue.capacidad}</Text>
              <Text>Código: {selectedAlbergue.codigo}</Text>
              <Text>Latitud: {selectedAlbergue.lat}</Text>
              <Text>Longitud: {selectedAlbergue.lng}</Text>
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

export default AlberguesScreen;
