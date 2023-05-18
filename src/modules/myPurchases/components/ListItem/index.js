import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {PNG, SVG} from '../../../../../assets';
import RenderPlans from '../Plans';
import {useItem} from './hooks/useItem';
import {styles} from './style';
import {getDateInFormat, getTimeInFormat} from '../../../../utils/utils';
import {
  BOOKING_CONFIRMED,
  COLLECTION_CHARGES,
  COUPON_APPLIED_SUCCESSFULLY,
  DISCOUNT,
  DISCOUNT_APPLIED,
  DOWNLOAD_INVOICE,
  ORDER_DETAILS,
  ORDER_NUMBER,
  ORDER_SUMMARY,
  PRICE_BREAK_UP,
  PURCHASED_BY,
  REORDER,
  SPACE,
  TOTAL_AMOUNT,
} from './constants';

const ListItem = ({renderList, item, index}) => {
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
    itemSeparatorStyle,
    reorderContainer,
    dateTimeContainer
  } = styles();

  const renderPlans = ({item, index}) => {
    return <RenderPlans item={item} index={index} key={index}/>;
  };
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
          <>
            {renderList && (
              <View style={listExpandContainer}>
                <FlatList
                  data={item?.planServiceDtoList}
                  keyExtractor={(item, index) => `${index}`}
                  nestedScrollEnabled={true}
                  renderItem={renderPlans}
                  ItemSeparatorComponent={() => (
                    <View style={itemSeparatorStyle} />
                  )}
                />
              </View>
            )}
            <View style={purchaseContainer}>
              <Text style={purchaseText}>{PURCHASED_BY}</Text>
              <Text style={personText}>{item?.customerName}</Text>
            </View>
            <View>
              <Text style={orderDetailsText}>{ORDER_DETAILS}</Text>
              <View style={priceBreakupContainer}>
                <Text style={priceBreakupText}>{PRICE_BREAK_UP}</Text>
                {purchasesTab === 0 && item?.couponName && (
                  <View style={couponContainer}>
                    <Text style={couponText}>
                      {item?.couponName}
                      <Text style={[couponDescription, {maxWidth: '50%'}]}>
                        {SPACE}
                        {COUPON_APPLIED_SUCCESSFULLY}
                      </Text>
                    </Text>
                    <Text style={couponDescription}>
                      {`₹${item?.couponDiscount} `}
                      {DISCOUNT_APPLIED}
                    </Text>
                  </View>
                )}
                {purchasesTab === 1 && priceBreakUpArray[0]?.couponName && (
                  <View style={couponContainer}>
                    <Text style={couponText}>
                      {priceBreakUpArray[0]?.couponName}
                      <Text style={[couponDescription, {maxWidth: '50%'}]}>
                        {SPACE}
                        {COUPON_APPLIED_SUCCESSFULLY}
                      </Text>
                    </Text>
                    <Text style={couponDescription}>
                      {`₹${priceBreakUpArray[0]?.discount} `}
                      {DISCOUNT_APPLIED}
                    </Text>
                  </View>
                )}
              </View>
              {priceBreakUpArray.map(item => {
                return (
                  <View style={planDetailsContainer}>
                    <Text style={planText}>{item?.name}</Text>
                    <View style={rowView}>
                      {item?.discount && item?.totalAmount > item?.amountPaid && (
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
              {purchasesTab === 1 && (
                <View style={amountDetailsContainer}>
                  <Text style={totalAmountText}>{DISCOUNT}</Text>
                  <Text style={discountPrice}>{`₹${Math.ceil(
                    priceBreakUpArray[0]?.totalDiscount,
                  )}/-`}</Text>
                </View>
              )}
              {priceBreakUpArray[0]?.processingCharge > 0 && purchasesTab === 1 && (
                <View style={amountDetailsContainer}>
                  <Text style={totalAmountText}>{COLLECTION_CHARGES}</Text>
                  <Text style={priceText}>{`₹${ priceBreakUpArray[0]?.processingCharge}/-`}</Text>
                </View>
              )}
              <View style={amountDetailsContainer}>
                <Text style={totalAmountText}>{TOTAL_AMOUNT}</Text>
                <Text style={priceText}>{`₹${Math.ceil(
                  item?.amountPaid,
                )}/-`}</Text>
              </View>
              <View style={[rowView,reorderContainer]}>
              <Text style={reorderText}>{REORDER}</Text>
              <SVG.Reorder/>
              </View>
              <View style={summaryContainer}>
                <Text style={invoiceText}>{DOWNLOAD_INVOICE}</Text>
                <Text style={invoiceText}>{ORDER_SUMMARY}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ListItem;
