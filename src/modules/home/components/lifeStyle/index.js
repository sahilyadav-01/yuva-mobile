import React from 'react';
import {View, Text} from 'react-native';
import YuvaPackages from '../../../../components/YuvaPackages';
import {styles} from './styles';

const LifeStyle = ({onPackagePress, renderLifeStyleItem}) => {
  const packages = [...renderLifeStyleItem].flat().splice(0, 3);
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>Lifestyle Packages</Text>
        <Text
          onPress={() =>
            onPackagePress(packages[0]?.enumName, packages[0]?.name)
          }
          style={styles.viewAll}>
          View All
        </Text>
      </View>
      <YuvaPackages
        packages={packages}
        onPackagePress={(enumName, name) => onPackagePress(enumName, name)}
        lifeStyle={true}
      />
    </View>
  );
};
export default LifeStyle;
