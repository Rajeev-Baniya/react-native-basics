import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestScreen = props => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAdults(prev => (prev == 0 ? 0 : prev - 1))}
              style={styles.button}>
              <Text style={{fontSize: 16}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(prev => prev + 1)}
              style={styles.button}>
              <Text style={{fontSize: 16}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setChildren(prev => (prev == 0 ? 0 : prev - 1))}
              style={styles.button}>
              <Text style={{fontSize: 16}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            <Pressable
              onPress={() => setChildren(prev => prev + 1)}
              style={styles.button}>
              <Text style={{fontSize: 16}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setInfants(prev => (prev == 0 ? 0 : prev - 1))}
              style={styles.button}>
              <Text style={{fontSize: 16}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(prev => prev + 1)}
              style={styles.button}>
              <Text style={{fontSize: 16}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 40,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 30,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
