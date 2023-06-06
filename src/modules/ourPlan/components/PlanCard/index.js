import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BASE_64, PNG, SVG } from '../../../../../assets';
import { ALTO, CYAN_BLUE, GREY, WHITE } from '../../../../styles/colors';
import { BUY_NOW, FOR_MORE, RUPEE_SYMOL } from '../../constant';
import { usePlanCard } from './hooks/usePlanCard';
import { styles } from './styles';

const PlanCard = (props) => {
  const {item, isHomeScreen,isDetailScreen} = props;
  const { onDetailsScreen, priceObj, planService } = usePlanCard(item);
  const {name} = item || {};
  const RenderedIcon = ({index,colorProp}) => {
    const Icons = [{index:0,icon:()=><SVG.OPDIcon color={colorProp}/>},{index:1,icon:()=><SVG.CheckUpIcon color={colorProp}/>},{index:2,icon:()=><SVG.HraSvg color={colorProp}/>},{index:3,icon:()=><SVG.TalkToDoctorSvg color={colorProp}/>}]
    const renderIcon = Icons.find((item,i)=>{if(i===index) return item})?.icon();
    return renderIcon;
  }
  if(!item) {
    return null;
  }

  const renderItem = ({item: serviceItem, index}) => {
    const { serviceName, shortDescription, image, available } = serviceItem || {};
    return (
      <View style={{...styles.itemContainer,marginRight:index%2===0? 36 : 28}} key={index}>
        <View style={{...styles.iconContainer,backgroundColor:available ? CYAN_BLUE : ALTO}}>
          <RenderedIcon index={index} colorProp={available ? WHITE : GREY}/>
        </View>
        <View style={styles.detailsView}>
          <Text style={[styles.serviceNameText, !available && styles.notAvailable]}>{serviceName}</Text>
          <View style={styles.detailsSeparator}/>
          <Text style={[styles.serviceDetailsText, !available && styles.notAvailable]}>{shortDescription}</Text>
        </View>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onDetailsScreen} disabled={!isHomeScreen} style={isDetailScreen ?styles.detailsCont  :styles.container }>
      <Image source={PNG.OurPlanBackground} style={styles.imgBackground} resizeMode={'cover'}/>
        <View style={styles.containerView}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>{name || ''}</Text>
          </View>
          <FlatList 
            data={planService}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={(item, index) => `${index}`}
            numColumns={2}
            contentContainerStyle={styles.serviceContainer}
            nestedScrollEnabled={true}
          />
          <View style={styles.footerContainer}/>
          {isHomeScreen && <View style={styles.bottomView}>
            <View style={styles.bottomContainer}>
              <View style={styles.descriptionContainer}>
                <View style={styles.descriptionInitialContainer}>
           <Text style={styles.planDescriptionInitial}>As low as</Text>
           </View>
           <Text style={styles.priceText}>{RUPEE_SYMOL} {priceObj?.finalPrice} {'/'}month</Text>
           </View>
              <View style={styles.spaceContainer}>
              <View style={[styles.buyNowView]}>
                    <Text style={styles.buyNowText}>
                      {BUY_NOW}
                    </Text>
                  </View>
              <View style={styles.moreTextContainer}>
              <Text style={styles.moreText}>{FOR_MORE}</Text>
              </View>
              </View>
            </View>
            <View style={styles.popularPlanImageContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={BASE_64.DoctorsImage} resizeMode='cover'/>
              </View>
            </View>
          </View>}
        </View>
    </TouchableOpacity>
  );
};

export default PlanCard;