import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff' // Asegúrate de elegir un color que se adapte al diseño de tu app
  },
  titleLarge: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleSmall: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 20
  }
});
