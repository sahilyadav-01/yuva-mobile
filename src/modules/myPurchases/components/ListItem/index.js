import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {PNG, SVG} from '../../../../../assets';
import RenderPlans from '../Plans';
import {useItem} from './hooks/useItem';
import {styles} from './style';
import {getDateInFormat, getTimeInFormat} from '../../../../utils/utils';

const ListItem = ({renderList, item, index}) => {
  const {expanded, onArrowPress, priceBreakUpArray} = useItem(item);
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
    purchaseContainer,
    purchaseText,
    orderDetailsText,
    priceBreakupText,
    planDetailsContainer,
    amountDetailsContainer,
    priceText,
    reorderText,
    summaryContainer,
    personText,
    planText,
    amountText,
    totalAmountText,
    invoiceText,
    rowView,
    regularPriceText,
    separator,
    discountPrice,
    arrowContainer,
    couponText,
    couponDescription,
    couponContainer,
    priceBreakupContainer,
    listExpandContainer,
  } = styles();

  const renderPlans = ({item, index}) => {
    return <RenderPlans item={item} index={index} />;
  };
  return (
    <ScrollView>
      <View style={listContainer}>
        <View style={topSectionContainer}>
          <Text numberOfLines={1} style={orderText}>
            ORDER NUMBER - {item?.orderNumber}
          </Text>
          <View style={rowContainer}>
            <Image source={PNG.DATE} resizeMode="contain" style={imageStyle} />
            <View style={{marginLeft: 2}}>
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
            <Text style={bookingText}>Booking Confirmed</Text>
          </View>
          <TouchableOpacity
            style={arrowContainer}
            onPress={() => onArrowPress(item?.orderNumber)}>
            <SVG.ExpandArrow expanded={expanded} />
          </TouchableOpacity>
        </View>
        {expanded && (
          <>
            {renderList && (
              <View style={listExpandContainer}>
                <FlatList
                  data={item?.planServiceDtoList}
                  keyExtractor={index => index}
                  renderItem={renderPlans}
                  ItemSeparatorComponent={() => <View style={{height: 24}} />}
                />
              </View>
            )}
            <View style={purchaseContainer}>
              <Text style={purchaseText}>Purchased By</Text>
              <Text style={personText}>{item?.customerName}</Text>
            </View>
            <View>
              <Text style={orderDetailsText}>Order Details</Text>
              <View style={priceBreakupContainer}>
                <Text style={priceBreakupText}>{`(Price break up)`}</Text>
                {item?.couponName && (
                  <View style={couponContainer}>
                    <Text style={couponText}>
                      {item?.couponName}
                      <Text style={[couponDescription, {maxWidth: '50%'}]}>
                        {' '}
                        Coupon Applied Successfully
                      </Text>
                    </Text>
                    <Text style={couponDescription}>{`₹${
                      item?.couponDiscount ?? item?.couponAmount ?? ''
                    } discount applied to your order.`}</Text>
                  </View>
                )}
              </View>
              {priceBreakUpArray.map(item => {
                return (
                  <View style={planDetailsContainer}>
                    <Text style={planText}>{item?.name}</Text>
                    <View style={rowView}>
                      {item?.discount && (
                        <Text
                          style={[amountText, regularPriceText]}>{`₹${Math.ceil(
                          item?.totalAmount,
                        )}/-`}</Text>
                      )}
                      <Text style={amountText}>{`₹${Math.ceil(
                        item?.amountPaid,
                      )}/-`}</Text>
                    </View>
                  </View>
                );
              })}
              <View style={separator} />
              {!expanded && (
                <View style={amountDetailsContainer}>
                  <Text style={totalAmountText}>Discount</Text>
                  <Text style={discountPrice}>{`₹${Math.ceil(
                    item?.discount,
                  )}/-`}</Text>
                </View>
              )}
              <View style={amountDetailsContainer}>
                <Text style={totalAmountText}>Total Amount</Text>
                <Text style={priceText}>{`₹${Math.ceil(
                  item?.amountPaid,
                )}/-`}</Text>
              </View>
              <Text style={reorderText}>Reorder</Text>
              <View style={summaryContainer}>
                <Text style={invoiceText}>Download Invoice</Text>
                <Text style={invoiceText}>Order Summary</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ListItem;
