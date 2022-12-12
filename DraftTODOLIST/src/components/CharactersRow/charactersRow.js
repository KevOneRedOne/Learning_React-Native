import React from 'react';
import { View, Image, Text } from 'react-native';

const CharactersRow = ({ name, image }) => {
  return (
    <View key={name}>
      <Image
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'red',
        }}
        source={image ? { uri: image } : null}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default CharactersRow;
