import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PNG } from '../../../../../assets';
import { BUY_NOW, MORE } from '../../constant';
import { styles } from './styles';

const PlanCard = (props) => {
  const { onContainerPress, direction, item } = props;
  const isActiveIndex = (direction === undefined || direction === null);
  if (!item) {
    return null;
  }
  const { 
    name, 
    planServiceNameList, 
  } = item;
  const renderItem = ({ item, index }) => {
    const { serviceName, shortDescription } = item;
    return (
      <View
        style={[
          styles.planView,
          (index % 2) === 0 ? styles.oddColor
            : styles.evenColor
        ]}
        key={index}
      >
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            {serviceName}
          </Text>
        </View>
        <View style={styles.valueView}>
          <Text style={styles.valueText}>
            {shortDescription}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity style={[styles.container, isActiveIndex && styles.activeContainer]} disabled={isActiveIndex} onPress={onContainerPress}>
      <View style={styles.headingView}>
        <View style={styles.line} />
        <View style={styles.headingTextView}>
          <Text style={styles.headingText}>{name?.toUpperCase() || ''}</Text>
        </View>
      </View>
      <View>
        <Image source={PNG.POPULAR_PLAN} />
      </View>
      <View style={styles.detailsView}>
        <FlatList
          data={planServiceNameList}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}
        />
      </View>
      {isActiveIndex &&
          <View style={styles.footerView}>
            <View style={styles.moreView}>
              <Text style={styles.moreText}>
                {MORE}
              </Text>
            </View>
            <View style={styles.buyNowView}>
              <Text style={styles.buyNowText}>
                {BUY_NOW}
              </Text>
            </View>
          </View>
      }
    </TouchableOpacity>
  );
};

export default PlanCard;