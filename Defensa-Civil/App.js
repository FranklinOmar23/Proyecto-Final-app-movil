import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HistoriaScreen from './screens/HistoriaScreen';
import InicioScreen from './screens/Inicio';
import ServiciosScreen from './screens/Servicios';
import NoticiasScreen from './screens/Noticias';
import VideosScreen from './screens/Videos';
import AlberguesScreen from './screens/Albergues';
import MiembrosScreen from './screens/Miembros';
import MedidasPreventivas from './screens/MedidasPreventivas';
import MapaAlbergues from './screens/MapaAlbergues';
// Importa aquí los demás componentes de tus vistas

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#004c98' },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#ff7000',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#004c98',
        }}
      >
        {/* Agrega aquí todas tus vistas como Drawer.Screen */}
        <Drawer.Screen name="Inicio" component={InicioScreen} />
        <Drawer.Screen name="Historia" component={HistoriaScreen} />
        <Drawer.Screen name="Servicios" component={ServiciosScreen} />
        <Drawer.Screen name="Noticias" component={NoticiasScreen} />
        <Drawer.Screen name="Videos" component={VideosScreen} />
        <Drawer.Screen name="Albergues" component={AlberguesScreen} />
        <Drawer.Screen name="Mapa de Albergues" component={MapaAlbergues} />
        <Drawer.Screen name="Miembros" component={MiembrosScreen} />
        <Drawer.Screen name="Medidas" component={MedidasPreventivas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


