import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

function InicioScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper style={styles.swiper} showsButtons={true}>
          <View style={styles.slide}>
            <Image
              source={require('../assets/imagen1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/imagen2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/imagen3.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Defensa Civil</Text>
        <Text style={styles.slogan}>¡Protegiendo vidas, construyendo esperanzas!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  swiperContainer: {
    width: '100%',
    height: 500,
    backgroundColor: '#9DD6EB',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  slogan: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default InicioScreen;