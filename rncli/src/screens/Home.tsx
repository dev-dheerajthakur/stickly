import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

type props = {
  navigation: NavigationProp<rootStackParamList, 'Home'>;
};

export default function Home({ navigation }: props) {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Go to About' onPress={() => navigation.navigate('About')} />
    </View>
  );
}
