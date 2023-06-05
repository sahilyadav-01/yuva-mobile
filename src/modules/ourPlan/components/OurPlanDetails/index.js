import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Header from '../../../../components/Header';
import {
  OURPLAN_DETAILS,
  PLAN_DETAILS,
  TERMS_AND_CONDITION,
  termsAndCondition,
  BUY_NOW,
  Carouselt,
  PLAN,
  INCLUDES,
  SUB_HEADING,
  ONE_YEAR_SUB,
} from './constants';
import OurPlan from "../..";
import {useOurPlanDetails} from './hooks/useOurPlanDetails';
import {styles} from './styles';
import {PNG} from '../../../../../assets';
import {RUPEE_SYMOL} from '../../constant';
import CarouselItem from '../../../../components/CarouselItem';
import CarouselContainer from '../../../../components/CarouselContainer';
import PlanCard from '../PlanCard';
import SelectList from 'react-native-dropdown-select-list';
import { DARK_GRAY } from '../../../../styles/colors';
const OurPlanDetails = (props) => {
  const {planDetails, bookOurPlan, pricePerMonth,mainItem,dataRender,selected, setSelected} = useOurPlanDetails();
  const {isHealthPlan}=props;
  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <View style={styles.starIcon}>
          <Image style={styles.ImageStyle} source={PNG.dot} />
          <Text style={styles.details}>{item}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Header
        title={OURPLAN_DETAILS}
        hideMenu={false}
        showCart={true}
        showBackButton={true}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        nestedScrollEnabled={true}>
         <View style={styles.subHeadingView}>
        <Text style={styles.subHeadingText}>{SUB_HEADING}</Text>
        <SelectList
              boxStyles={
                selected.length > 0
                  ? styles.boxStyles
                  : [styles.boxStyles, styles.backGroundStyle]
              }
              search={false}
              defaultOption={{key:"null", value: "MYSELF"}}
              setSelected={setSelected}
              data={dataRender}
              dropdownStyles={styles.dropStyles}
              inputStyles={styles.valueStyle}
              dropdownTextStyles={{color:DARK_GRAY}}
            />
      </View>
      {isHealthPlan ? 
              <OurPlan isHomeScreen={false} isHealthPlan={true} />:
        <PlanCard item={mainItem} isHomeScreen={false}/>}
        <Text style={styles.PricePerYear}>
          {RUPEE_SYMOL}
          {mainItem?.yearlyFinalCost}/- <Text style={styles.oneYear}>{ONE_YEAR_SUB}</Text>
        </Text>
        <Text style={styles.PricePerMonth}>
          As low as
          <Text style={styles.rupee}>
            {'  '}
            {RUPEE_SYMOL} {pricePerMonth} {'/'}month
          </Text>
        </Text>
        <TouchableOpacity onPress={bookOurPlan} style={styles.touchableButton}>
          <Text style={styles.buyNow}>{BUY_NOW}</Text>
        </TouchableOpacity>
        <View style={styles.planDetailsCard}>
          <View style={styles.headerView}>
            <Text style={styles.planDetails}>{PLAN_DETAILS}</Text>
          </View>
          <View style={styles.PlanText}>
            <Text style={styles.planAlso}>{PLAN}</Text>
            <Text style={styles.includes}>{INCLUDES}</Text>
          </View>
          <View>
            <CarouselContainer data={Carouselt} isIndexed={true}>
              <CarouselItem isScreen={'OurPlan'} />
            </CarouselContainer>
          </View>
          {planDetails && (
            <FlatList
              renderItem={renderItem}
              data={planDetails}
              keyExtractor={(item, index) => `${index}`}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
          <Text style={styles.termsCondition}>{TERMS_AND_CONDITION}</Text>
          <FlatList
            renderItem={renderItem}
            data={termsAndCondition}
            keyExtractor={(item, index) => `${index}`}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default OurPlanDetails;
