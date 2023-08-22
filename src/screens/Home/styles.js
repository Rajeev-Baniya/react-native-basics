import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    marginLeft: 25,
    marginTop: 25,
    width: 200,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // marginHorizontal: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    gap: 6,
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
