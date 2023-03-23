import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PNG, SVG } from '../../../../../assets';
import { CYAN_BLUE, RED_SHADE } from '../../../../styles/colors';
import { BUY_NOW, FOR_MORE, MORE, MOST_POPULAR, NOT_AVAILABLE, RUPEE_SYMOL } from '../../constant';
import { usePlanCard } from './hooks/usePlanCard';
import { styles } from './styles';

const PlanCard = (props) => {
  const {item, isHomeScreen} = props;
  const { onDetailsScreen, priceObj, planService } = usePlanCard(item);
  const {name, featured} = item || {};
  if(!item) {
    return null;
  }

  const renderItem = ({item: serviceItem, index}) => {
    const { serviceName, shortDescription, image } = serviceItem || {};
    const isNotAvailable = shortDescription === NOT_AVAILABLE;
    return (
      <View style={styles.itemContainer} key={index}>
        <View>
          <Image source={image} />
        </View>
        <View style={styles.detailsView}>
          <Text style={[styles.serviceNameText, isNotAvailable && styles.notAvailable]}>{serviceName}</Text>
          <Text style={[styles.serviceDetailsText, isNotAvailable && styles.notAvailable]}>{shortDescription}</Text>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onDetailsScreen} disabled={!isHomeScreen} style={styles.container}>
      <ImageBackground source={PNG.OurPlanBackground} style={styles.imgBackground} resizeMode={'contain'}>
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
            style={styles.serviceContainer}
          />
          <View style={styles.bottomView}>
            <View style={styles.priceView}>
              <View style={styles.priceContainer}>
                <View style={styles.valueContainer}>
                  <Text style={styles.discountpriceText}>{RUPEE_SYMOL} {priceObj?.value} {'/-'}</Text>
                  <Text style={styles.priceText}>{RUPEE_SYMOL} {priceObj?.value} {'/-'}</Text>
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
            <View style={styles.imageView}>
              <Image source={PNG.POPULAR_PLAN} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PlanCard;