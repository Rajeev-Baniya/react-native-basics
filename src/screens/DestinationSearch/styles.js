import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    gap: 15,
  },
  iconContainer: {
    backgroundColor: '#d4d4d4',
    padding: 7,
    borderRadius: 5,
  },
  locationText: {},
});

export default styles;
