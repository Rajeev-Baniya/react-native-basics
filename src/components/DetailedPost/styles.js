import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    height: 230,
    // aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    marginVertical: 5,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  prices: {
    fontSize: 18,
    marginVertical: 7,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    marginRight: 20,
    color: '#5b5b5b',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default styles;
