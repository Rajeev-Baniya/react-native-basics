import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    // width: '100%',
    aspectRatio: 1,
    height: '100%',
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
});

export default styles;
