import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles as style} from './style';
import {SVG} from '../../../assets';

function YuvaPackages({
  packages,
  onPackagePress,
  onPressAdd,
  existingIds,
  lifeStyle,
}) {
  const isLifeStylePackage = lifeStyle ?? false;
  const styles = style();
  if (typeof packages === 'object' && packages?.length > 0)
    return packages?.map((item, index) => {
      const buttonStyle = [
        styles.itemStyle,
        style({gap: index < packages?.length - 1}).itemGap,
      ];
      return (
        <TouchableOpacity
          onPress={() =>
            isLifeStylePackage
              ? onPackagePress(item?.enumName, item?.name)
              : onPackagePress(item)
          }
          style={buttonStyle}>
          <View style={styles.rowItemContainer}>
            <SVG.PopularHealth />
            <View style={styles.detailsContainer}>
              <Text style={styles.heading}>{item?.name}</Text>
              {!isLifeStylePackage ? (
                <Text style={styles.description}>
                  Includes {item?.parameterCount} tests
                </Text>
              ) : null}
            </View>
          </View>
          {!isLifeStylePackage && (
            <TouchableOpacity
            disabled={
              !isLifeStylePackage &&
              existingIds.length > 0 &&
              existingIds.includes(item?.id)
            }
              onPress={() => onPressAdd(item)}
              style={style({disabled:existingIds.includes(item?.id)}).addContainer}>
              <SVG.AddIcon />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      );
    });
  return null;
}

export default YuvaPackages;
