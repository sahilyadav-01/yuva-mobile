import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {SVG} from '../../../../../assets';
import {styles} from './styles';
import {ADD, OFFER, PACKAGES, PARAMS, VIEW_DETAILS} from './constant';

const PopularPackages = props => {
  const {from, item} = props;
  const renderItem = ({item}) => {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.offerView}>
          <Text style={styles.discountStyle}>{item.DISCOUNT}</Text>
          <Text style={styles.offerrStyle}>{OFFER}</Text>
        </View>

        <View style={styles.imageContainer}>
          {from == PACKAGES ? (
            <>
              <SVG.Scientist />
              <Text style={styles.textContainer}>
                {item.DIABETES_SCREENING}
              </Text>
              <View style={styles.tubeContainer}>
                <SVG.TestTube />
                <Text style={styles.cbcContainer}>{item.CBC}</Text>
              </View>
            </>
          ) : (
            <>
              <SVG.HealthCheck />
              <Text style={styles.textContainer}>{item.LIPID_PROFILE}</Text>
            </>
          )}

          <View style={styles.priceContainer}>
            <Text style={styles.oldPrice}>{item.OLD_PRICE}</Text>
            <Text style={styles.newPrice}>{item.NEW_PRICE}</Text>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.newPrice}>{VIEW_DETAILS}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>{ADD}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={item}
        keyExtractor={index => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PopularPackages;
