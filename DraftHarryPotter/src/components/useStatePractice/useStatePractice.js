import React from 'react-native';

import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const UseStatePractice = () => {
  const [count, setCount] = React.useState(0);
  return (
    <SafeAreaView>
      <View>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UseStatePractice;
