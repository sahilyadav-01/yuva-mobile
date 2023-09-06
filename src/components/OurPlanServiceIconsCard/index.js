// import React from 'react';
// import {View, Text} from 'react-native';
// import {styles} from './styles';

// const OurPlanServiceIconsCard = ({name, icon, text}) => {
//   return (
//     <View style={styles.touchableOpacityContainerStyle}>
//       <View style={styles.subTopContainerStyle}>
//         <View style={styles.headView}>
//           <Text style={styles.head}>{text}</Text>    
//         </View>
//           {icon()}
//       </View>
//       <Text style={styles.subBottomContainerStyle}>{name}</Text>
//       </View>
//   );
// };

// export default OurPlanServiceIconsCard;
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const OurPlanServiceIconsCard = ({ name, icon, text }) => {
  return (
    <View style={styles.touchableOpacityContainerStyle}>
      <View style={styles.subTopContainerStyle}>
        <View style={styles.headView}>
          <Text style={styles.head}>{text}</Text>
        </View>
        <View style={styles.iconContainer}>{icon()}</View>
      </View>
      <Text style={styles.subBottomContainerStyle}>{name}</Text>
    </View>
  );
};

export default OurPlanServiceIconsCard;

