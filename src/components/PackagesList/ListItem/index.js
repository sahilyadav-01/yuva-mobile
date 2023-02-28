import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SVG } from '../../../../assets';
import { TUNDORA } from '../../../styles/colors';
import { styles } from './style';

const ListItem = props => {
  const { item, index } = props;
  const style = styles({ selected: item?.selected });
  return (
    <TouchableOpacity
      onPress={() => {
        props?.onPackagePress({ item, index });
        
      }}
      style={style.itemContainer}>
      <Text numberOfLines={2} style={style.nameContainer}>
        {item.packageName || item.testName}
      </Text>
      <View style={style.priceContainer}>
        {item?.discount && (
          <Text style={style.discountText}>{item?.discount}</Text>
        )}
        {item?.cost && <Text style={style.priceText}>{item?.cost}</Text>}

        <TouchableOpacity
          onPress={() => {
            props?.onPackageSelect({ item, index });
          }}>
          {item.selected ? <SVG.tick /> : <SVG.PlusIcon color={TUNDORA} />}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
