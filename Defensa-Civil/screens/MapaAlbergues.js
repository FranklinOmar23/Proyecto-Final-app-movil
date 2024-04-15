import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapaAlbergues = () => {
 const [albergues, setAlbergues] = useState([]);

 useEffect(() => {
    fetch('https://adamix.net/defensa_civil/def/albergues.php')
      .then(response => response.json())
      .then(data => {
        if (data.exito && Array.isArray(data.datos)) {
          setAlbergues(data.datos);
        } else {
          console.error('La respuesta de la API no contiene datos válidos:', data);
        }
      })
      .catch(error => console.error('Error fetching albergues', error));
 }, []);

 return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.7357, // Latitud de República Dominicana
          longitude: -70.1627, // Longitud de República Dominicana
          latitudeDelta: 3, // Zoom inicial
          longitudeDelta: 2,
        }}
      >
        {albergues.map((albergue, index) => {
          const lat = Number(albergue.lat);
          const lng = Number(albergue.lng);
          return (
            <Marker
              key={index}
              coordinate={{ latitude: lng, longitude: lat }}
              title={albergue.edificio}
              description={`Ciudad: ${albergue.ciudad}, Teléfono: ${albergue.telefono}`}
            />
          );
        })}
      </MapView>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
 },
 map: {
    flex: 1,
 },
});

export default MapaAlbergues;
