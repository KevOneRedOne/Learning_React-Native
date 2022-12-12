import React from 'react';

import {View, Text} from 'react-native';

// const Title = props => {
//   return (
//     <View>
//       <Text>{props.title}</Text>
//     </View>
//   );
// };

//Destructuration ES6 de la props
const Title = ({title = 'Ecris un truc ici'}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Title;
