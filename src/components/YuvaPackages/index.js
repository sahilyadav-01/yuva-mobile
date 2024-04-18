import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles as style} from './style';
import {SVG} from '../../../assets';

function YuvaPackages({packages, onPackagePress, onPressAdd, existingIds,isTest}) {
  const styles = style();
  if (typeof packages === 'object' && packages?.length > 0)
    return packages?.map((item, index) => {
        const buttonStyle = [
          styles.itemStyle,
          style({
            gap: index < packages?.length - 1,
            diabled:
              existingIds.length > 0 && existingIds.includes(item?.id),
          })?.itemGap,
        ];
        return (
          <TouchableOpacity
            disabled={
              existingIds.length > 0 && existingIds.includes(item?.id)
            }
            onPress={() => onPackagePress(item)}
            style={buttonStyle}>
            <View style={styles.rowItemContainer}>
              <SVG.PopularHealth />
              <View style={styles.detailsContainer}>
                <Text styles={styles.heading}>{item?.name}</Text>
                <Text style={styles.description}>
                  Includes {item?.parameterCount} tests
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => onPressAdd(item)}
              style={styles.addContainer}>
              <SVG.AddIcon />
            </TouchableOpacity>
          </TouchableOpacity>
        );
    });
  return null;
}

export default YuvaPackages;
