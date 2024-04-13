import React from 'react';
import { VView, Text, Image, Dimensions, } from 'react-native';
import { styles } from '../style/estilo';
import Carousel from 'react-native-snap-carousel';

function HistoriaScreen() {
  const data = [
    {
      title: "Imagen 1",
      text: "Descripción de la imagen 1.",
      imageUrl: "../img/Enfoque-TeVe-Defensa-Civil.jpg"
    },
    {
      title: "Imagen 2",
      text: "Descripción de la imagen 2.",
      imageUrl: "../img/FBBopLRVkAoIzN0.jpg"
    },
    {
      title: "Imagen 3",
      text: "Descripción de la imagen 3.",
      imageUrl: "../img/thpub_700x400_176847.jpg"
    }
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  
  return (
    <ScrollView style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        layout={"default"}
      />
      <Text style={styles.title}>Historia de la Defensa Civil</Text>
      <Text style={styles.paragraph}>
        Antes del año 1966, cuando llegaba la temporada de huracanes, un grupo de radioaficionados se reunía en la Cruz Roja para estar atentos por si surgía algún tipo de emergencia, inmediatamente ponerse a disposición y ayudar en todo lo posible, inclusive, usando sus propios equipos de comunicación para así tener contacto con el exterior en caso de que las redes telefónicas resultaran afectadas.
      </Text>
      <Text style={styles.paragraph}>
        Al surgir el triunvirato fue designado el Dr. Rafael Cantizano Arias, como presidente de la Cruz Roja y al mismo tiempo nombraron al Ing. Carlos D´ Franco como director de la Defensa Civil, quien con un grupo compuesto por seis personas, se instaló en la calle Francia esquina Galván, siendo esa la primera oficina de la Defensa Civil.
      </Text>
      {/* Agregar más párrafos según el contenido */}
    </ScrollView>
  );
}

export default HistoriaScreen;
