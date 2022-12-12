import React from 'react';
import Title from '../../components/Title/title';
import {View, StyleSheet} from 'react-native';

const Practice = () => {
  return (
    <View>
      <View style={styles.pratice}>
        <Title title="Pratice" />
        <Title title="Coucou" />
        <Title />
      </View>
      <View style={styles.test}>
        <Title title="Test" />
      </View>
    </View>
  );
};

// Creation d'un style pour le component pratice et test
const styles = StyleSheet.create({
  pratice: {
    backgroundColor: 'red',
  },
  test: {
    backgroundColor: 'blue',
  },
});

export default Practice;
