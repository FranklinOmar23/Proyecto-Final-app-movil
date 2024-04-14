import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const FormularioRegistro = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [clave, setClave] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleRegistro = async () => {
    try {
      const datos = {
        cedula,
        nombre,
        apellido,
        clave,
        correo,
        telefono
    }
      const response = await axios.post(
        'https://adamix.net/defensa_civil/def/registro.php', 
        JSON.stringify(datos),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      // Verificar la respuesta de la API
      console.log(response.data);

      // Mostrar mensaje de éxito al usuario
      Alert.alert('Registro exitoso', 'Tu formulario se ha enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);

      // Mostrar mensaje de error al usuario
      Alert.alert('Error', 'Hubo un problema al enviar el formulario');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
      />
      <TextInput
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        placeholder="Clave"
        value={clave}
        onChangeText={setClave}
        secureTextEntry
      />
      <TextInput
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        inputMode="email-address"
      />
      <TextInput
        style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        inputMode="phone-pad"
      />
      <Button title="Registrar" onPress={handleRegistro} />
    </View>
  );
};

export default FormularioRegistro;
