import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, ScrollView, Button } from 'react-native';

const MiembrosScreen = () => {
  const [miembros, setMiembros] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://adamix.net/defensa_civil/def/miembros.php')
      .then(response => response.json())
      .then(data => {
        if (data.exito) {
          setMiembros(data.datos);
        } else {
          console.error('Error al obtener los datos:', data.mensaje);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.miembroItem}>
        <Image source={{ uri: item.foto }} style={styles.miembroFoto} />
        <View style={styles.miembroInfo}>
          <Text style={styles.miembroNombre}>{item.nombre}</Text>
          <Text style={styles.miembroCargo}>{item.cargo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handlePress = (member) => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Miembros Activos</Text>
      <FlatList
        data={miembros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {selectedMember && (
                <>
                  <Image source={{ uri: selectedMember.foto }} style={styles.modalFoto} />
                  <Text style={styles.modalNombre}>{selectedMember.nombre}</Text>
                  <Text style={styles.modalCargo}>{selectedMember.cargo}</Text>
                  <ScrollView>
                    <Text style={styles.modalDescription}>{selectedMember.descripcion}</Text>
                  </ScrollView>
                  <Button title="Cerrar" onPress={closeModal} />
                </>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  miembroItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  miembroFoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  miembroInfo: {
    flex: 1,
  },
  miembroNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#004c98',
  },
  miembroCargo: {
    fontSize: 16,
    color: '#555',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalFoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  modalNombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#004c98',
  },
  modalCargo: {
    fontSize: 18,
    color: '#555',
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default MiembrosScreen;
