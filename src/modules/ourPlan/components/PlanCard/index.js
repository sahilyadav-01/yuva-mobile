import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PNG, SVG } from '../../../../../assets';
import { CYAN_BLUE, RED_SHADE } from '../../../../styles/colors';
import { BUY_NOW, FOR_MORE, MORE, MOST_POPULAR, NOT_AVAILABLE, RUPEE_SYMOL } from '../../constant';
import { usePlanCard } from './hooks/usePlanCard';
import { styles } from './styles';

const PlanCard = (props) => {
  const {item, isHomeScreen} = props;
  const { onDetailsScreen, priceObj } = usePlanCard(item);
  const {name, planServiceNameList, featured} = item || {};
  if(!item) {
    return null;
  }
  const renderItem = ({item: serviceItem, index}) => {
    const { serviceName, shortDescription } = serviceItem || {};
    const isAvailable = shortDescription !== NOT_AVAILABLE;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.iconView}>
          {isAvailable ? <SVG.Check /> : <SVG.Cross />}
        </View>
        <View style={styles.serviceView}>
          <Text style={styles.serviceText}>{serviceName}</Text>
        </View>
        <View style={styles.valueView}>
          <Text style={[styles.valueText, {color: isAvailable? CYAN_BLUE: RED_SHADE}]}>{shortDescription}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={onDetailsScreen} style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>{name?.toUpperCase() || ''}</Text>
      </View>
      {featured && 
        <View style={styles.featuredView}>
          <Text style={styles.featuredText}>{MOST_POPULAR}</Text>
        </View>
      }
      <View style={styles.bodyView}>
        <View style={styles.imageView}>
          <Image source={PNG.POPULAR_PLAN} />
        </View>
        <FlatList 
          data={planServiceNameList}
          renderItem={renderItem}
          scrollEnabled={false}
        />
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{RUPEE_SYMOL} {priceObj?.value} {'/-'}</Text>
          <Text style={styles.durationText}>{priceObj?.duration}</Text>
        </View>
        { isHomeScreen &&
          <View style={styles.footerView}>
            <View style={styles.buyNowView}>
              <Text style={styles.buyNowText}>
                {BUY_NOW}
              </Text>
            </View>
            <View style={styles.moreView}>
              <Text style={styles.moreText}>{FOR_MORE}</Text>
            </View>
          </View>
        }
      </View>
    </TouchableOpacity>
  );
};

export default PlanCard;