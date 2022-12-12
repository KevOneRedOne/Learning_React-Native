import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import uuid from 'react-native-uuid';

function App() {
  const [todos, setTodos] = useState([
    {label: 'test', id: uuid.v4()},
    {label: 'ynov', id: uuid.v4()},
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.length < 3) {
      // eslint-disable-next-line no-alert
      alert('Pas assez grand input');
      return;
    }
    setTodos([{label: input, id: uuid.v4()}, ...todos]);
    setInput('');
  };

  const removeTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <View>
      <Text>Todo List</Text>
      <TextInput onChangeText={text => setInput(text)} value={input} />
      <Button onPress={addTodo} title="Add Todo" />
      {todos.map(todo => {
        return (
          <View>
            <Text>{todo.label}</Text>
            <Button onPress={() => removeTodo(todo.id)} title="remove Todo" />
          </View>
        );
      })}
    </View>
  );
}

export default App;
