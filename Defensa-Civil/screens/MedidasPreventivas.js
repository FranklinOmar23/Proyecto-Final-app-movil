import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Importa Icon de Ionicons

function MedidasPreventivas() {
  const [medidas, setMedidas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMedida, setCurrentMedida] = useState(null);

  useEffect(() => {
    const fetchMedidas = async () => {
      try {
        const response = await fetch('https://adamix.net/defensa_civil/def/medidas_preventivas.php');
        const json = await response.json();
        if (json.exito) {
          setMedidas(json.datos);
        } else {
          console.error('Failed to fetch the data');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchMedidas();
  }, []);

  const handlePress = (medida) => {
    setCurrentMedida(medida);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      {medidas.map((medida, index) => (
        <TouchableOpacity key={index} style={styles.medidaContainer} onPress={() => handlePress(medida)}>
          <Text style={styles.title}>{medida.titulo}</Text>
          {medida.foto ? (
            <Image source={{ uri: medida.foto }} style={styles.image} />
          ) : null}
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="close-circle" size={30} color="#000" />
            </TouchableOpacity>
            <ScrollView>
              <Text style={styles.modalTitle}>{currentMedida?.titulo}</Text>
              <Text style={styles.modalText}>{currentMedida?.descripcion}</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  medidaContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width * 0.56,
    borderRadius: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',  // Añade un fondo oscuro para resaltar el modal
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',  // Asegura que el modal no sea demasiado ancho
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default MedidasPreventivas;
