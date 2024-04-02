import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {usePackages} from './usePackages';
import YuvaPackages from '../../../../components/YuvaPackages';

const PopularHeathCheckupCarousel = ({
  popularPackageName,
  onHealthPackagePress,
  isTest
}) => {
  const {onPackagePress, onPressAdd, existingIds} = usePackages(isTest);
  const heading = isTest ? 'Popular Test Package' : 'Popular Health Checkup';
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{heading}</Text>
        <Text onPress={() => onHealthPackagePress(isTest ? 1 : 0)} style={styles.viewAll}>
          View All
        </Text>
      </View>
      <YuvaPackages
        packages={isTest ? popularPackageName?.popularTestResponseDtoList : popularPackageName?.popularPackageResponseDtoList}
        onPackagePress={onPackagePress}
        onPressAdd={onPressAdd}
        existingIds={existingIds}
        isTest={isTest}
      />
    </View>
  );
};
export default PopularHeathCheckupCarousel;
