import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PNG } from '../../../../../assets';
import { BUY_NOW, FOR_MORE, RUPEE_SYMOL } from '../../constant';
import { usePlanCard } from './hooks/usePlanCard';
import { styles } from './styles';

const PlanCard = (props) => {
  const {item, isHomeScreen} = props;
  const { onDetailsScreen, priceObj, planService } = usePlanCard(item);
  const {name} = item || {};
  if(!item) {
    return null;
  }

  const renderItem = ({item: serviceItem, index}) => {
    const { serviceName, shortDescription, image, available } = serviceItem || {};
    return (
      <View style={{...styles.itemContainer,maxWidth:'40%',marginRight:index%2===0? 36 : undefined}} key={index}>
        <View>
          <Image source={image} style={styles.iconStyle}/>
        </View>
        <View style={styles.detailsView}>
          <Text style={[styles.serviceNameText, !available && styles.notAvailable]}>{serviceName}</Text>
          <Text style={[styles.serviceDetailsText, !available && styles.notAvailable]}>{shortDescription}</Text>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onDetailsScreen} disabled={!isHomeScreen} style={styles.container}>
      <Image source={PNG.OurPlanBackground} style={styles.imgBackground} resizeMode={'cover'}/>
        <View style={styles.containerView}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>{name || ''}</Text>
          </View>
          <FlatList 
            data={planService}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => `${item}`}
            numColumns={2}
            contentContainerStyle={styles.serviceContainer}
          />
          <View style={styles.bottomView}>
            <View style={styles.priceView}>
              <View style={styles.priceContainer}>
                <View style={styles.valueContainer}>
                  <Text style={styles.discountpriceText}>{RUPEE_SYMOL} {priceObj?.value} {'/-'}</Text>
                  <Text style={styles.priceText}>{RUPEE_SYMOL} {priceObj?.finalPrice} {'/-'}</Text>
                </View>
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
            <View style={styles.popularPlanImageContainer}>
              <Image source={PNG.POPULAR_PLAN} style={styles.imageDetails}/>
            </View>
          </View>
        </View>
    </TouchableOpacity>
  );
};

export default PlanCard;