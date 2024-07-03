import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {
  COLLECTION_CHARGES,
  COUPON_APPLIED_SUCCESSFULLY,
  DISCOUNT,
  DISCOUNT_APPLIED,
  DOWNLOAD_INVOICE,
  ORDER_DETAILS,
  PRICE_BREAK_UP,
  PURCHASED_BY,
  SPACE,
  TOTAL_AMOUNT,
} from './constants';
import RenderPlans from '../Plans';
import {useDetailsView} from './hooks/useDetailsView';

const DetailsView = props => {
  const {item, purchasesTab, priceBreakUpArray, renderList} = props;
  const path =
    purchasesTab === 0
      ? item?.invoiceFilePath
      : priceBreakUpArray[0]?.invoiceFilePath;
  const {downloadInvoice} = useDetailsView(path);
  const {
    purchaseContainer,
    purchaseText,
    orderDetailsText,
    priceBreakupText,
    planDetailsContainer,
    amountDetailsContainer,
    priceText,
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
    couponText,
    couponDescription,
    couponContainer,
    priceBreakupContainer,
    listExpandContainer,
    itemSeparatorStyle,
  } = styles();

  const renderPlans = ({item, index}) => {
    return <RenderPlans item={item} index={index} />;
  };

  return (
    <>
      {renderList && (
        <View style={listExpandContainer}>
          <FlatList
            data={item?.planServiceDtoList}
            keyExtractor={index => index}
            renderItem={renderPlans}
            ItemSeparatorComponent={() => <View style={itemSeparatorStyle} />}
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
                {!(item?.totalAmount === item?.amountPaid) &&
                  item?.discount && (
                    <Text style={[amountText, regularPriceText]}>{`₹${Math.ceil(
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
            <Text
              style={
                priceText
              }>{`₹${priceBreakUpArray[0]?.processingCharge}/-`}</Text>
          </View>
        )}
        <View style={amountDetailsContainer}>
          <Text style={totalAmountText}>{TOTAL_AMOUNT}</Text>
          <Text style={priceText}>{`₹${Math.ceil(item?.amountPaid)}/-`}</Text>
        </View>
        <TouchableOpacity onPress={downloadInvoice} style={summaryContainer}>
          <Text style={invoiceText}>{DOWNLOAD_INVOICE}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailsView;
