import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import CharacterRow from './src/components/CharactersRow/charactersRow';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://hp-api.herokuapp.com/api/characters/students')
      .then(res => {
        console.log(res);
        setCharacters(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView>
      <View>
        <Text>Trombinoscope Harry Potter</Text>
      </View>
      {characters.map(character => {
        return <CharacterRow name={character.name} image={character.image} />;
      })}
    </ScrollView>
  );
}

export default App;
