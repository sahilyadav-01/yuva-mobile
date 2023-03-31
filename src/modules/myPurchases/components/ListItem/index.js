import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {PNG, SVG} from '../../../../../assets';
import RenderPlans from '../Plans';
import { useItem } from './hooks/useItem';
import {styles} from './style';

const ListItem = ({renderList,item,index}) => {

  const {expanded,onArrowPress} = useItem();
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
    discountPrice
  } = styles();

  const renderPlans = ({item, index}) => {
    return <RenderPlans />;
  };
  return (
    <ScrollView>
      <View style={listContainer}>
        <View style={topSectionContainer}>
          <Text numberOfLines={1} style={orderText}>
            ORDER NUMBER - 455-3999999-676756789
          </Text>
          <View style={rowContainer}>
            <Image source={PNG.DATE} resizeMode="contain" style={imageStyle} />
            <View style={{marginLeft: 2}}>
              <Text style={dateText}>26th May</Text>
              <Text style={timeText}>11:20</Text>
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
          <TouchableOpacity onPress={onArrowPress}>
          <SVG.ExpandArrow expanded={expanded} />
          </TouchableOpacity>
        </View>
        {expanded && (
          <>
            {renderList && (
              <View style={{marginVertical: 20}}>
                <FlatList
                  data={[0, 0]}
                  keyExtractor={index => index}
                  renderItem={renderPlans}
                  ItemSeparatorComponent={() => <View style={{height: 24}} />}
                />
              </View>
            )}
            <View style={purchaseContainer}>
              <Text style={purchaseText}>Purchased By</Text>
              <Text style={personText}>Nishanth Mund</Text>
            </View>
            <View>
              <Text style={orderDetailsText}>Order Details</Text>
              <Text style={priceBreakupText}>{`(Price break up)`}</Text>
              { [0,0,0].map(()=>{return (
                <View style={planDetailsContainer}>
                <Text style={planText}>Silver Yuva Health Plan</Text>
                <View style={rowView}>
                {false && <Text style={[amountText,regularPriceText]}>₹5999.00</Text>}
                <Text style={amountText}>₹5999.00</Text>
                </View>
              </View>
              )})}
              <View style={separator}/>
              <View style={amountDetailsContainer}>
                <Text style={totalAmountText}>Discount</Text>
                <Text style={discountPrice}>2500</Text>
              </View>
              <View style={amountDetailsContainer}>
                <Text style={totalAmountText}>Total Amount</Text>
                <Text style={priceText}>2500</Text>
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
