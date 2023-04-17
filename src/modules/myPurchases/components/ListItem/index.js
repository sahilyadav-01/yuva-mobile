import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {PNG, SVG} from '../../../../../assets';
import {useItem} from './hooks/useItem';
import {styles} from './style';
import {getDateInFormat, getTimeInFormat} from '../../../../utils/utils';
import {BOOKING_CONFIRMED, ORDER_NUMBER} from './constants';
import DetailsView from '../DetailsView';

const ListItem = ({item}) => {
  const {expanded, onArrowPress, priceBreakUpArray, purchasesTab} =
    useItem(item);
  const {
    listContainer,
    topSectionContainer,
    orderText,
    rowContainer,
    imageStyle,
    dateText,
    timeText,
    bottomSectionContainer,
    iconContainer,
    bookingText,
    sectionContainer,
    arrowContainer,
    dateTimeContainer,
  } = styles();

  return (
    <ScrollView>
      <View style={listContainer}>
        <View style={topSectionContainer}>
          <Text numberOfLines={1} style={orderText}>
            {ORDER_NUMBER} {item?.orderNumber}
          </Text>
          <View style={rowContainer}>
            <Image source={PNG.DATE} resizeMode="contain" style={imageStyle} />
            <View style={dateTimeContainer}>
              <Text style={dateText}>
                {getDateInFormat(new Date(item.dateOfPurchase), 'dd/mm/yyyy')}
              </Text>
              <Text style={timeText}>
                {getTimeInFormat(new Date(item.dateOfPurchase), 'hh:mm ')}
              </Text>
            </View>
          </View>
        </View>
        <View style={sectionContainer}>
          <View style={bottomSectionContainer}>
            <View style={iconContainer}>
              <SVG.Gift />
            </View>
            <Text style={bookingText}>{BOOKING_CONFIRMED}</Text>
          </View>
          <TouchableOpacity
            style={arrowContainer}
            onPress={() => onArrowPress(item?.orderNumber)}>
            <SVG.ExpandArrow expanded={expanded} />
          </TouchableOpacity>
        </View>
        {expanded && (
          <DetailsView
            item={item}
            purchasesTab={purchasesTab}
            priceBreakUpArray={priceBreakUpArray}
            renderList={false}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default ListItem;
