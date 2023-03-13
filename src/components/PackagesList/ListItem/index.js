import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SVG } from '../../../../assets';
import { TUNDORA } from '../../../styles/colors';
import { styles } from './style';

const ListItem = props => {
  const { item, index } = props;
  const style = styles({ selected: item?.selected });

  let priceComponent;
  if (item?.finalCost === item?.cost) {
    priceComponent = <Text style={style.priceText}>{`₹ ${item?.cost}/-`}</Text>;
  } else {
    priceComponent = (
      <>
        {item?.cost>-1 && <Text style={style.discountText}>{`₹ ${item?.cost}/-`}</Text>}
        {item?.finalCost>-1 && <Text style={style.priceText}>{`₹ ${item?.finalCost}/-`}</Text>}
      </>
    );
  }

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
        {priceComponent}
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
