import {Text, View, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/himal.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
          <Fontisto name="search" size={20} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>

        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn({data: 'explore btn clicked'})}>
          <Text style={styles.buttonText}>Explore near by stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
