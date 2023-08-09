import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {styles} from './style';
import {OUR_PLANS, SUB_HEADING, VIEW_ALL} from './Constant';
import {PNG} from '../../../../../assets';

const OurPlan = props => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };
  return (
    <View style={styles.container}>
      <View style={styles.OurPlansHeaderStyle}>
        <Text style={styles.LandingPageText1}>{OUR_PLANS} </Text>
        <View style={styles.line} />

        <TouchableOpacity>
          <Text style={styles.LandingPageText2}>{VIEW_ALL}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subHeadingView}>
        <Text style={styles.subHeadingText}>{SUB_HEADING}</Text>
      </View>
      <View style={styles.ImageView}>
        <Image style={styles.ImageBanner} source={PNG.Our_Plan_Banner} />
      </View>
      <View style={styles.PlanView}>
        <View style={styles.PlanClickView}>
          <TouchableOpacity style={styles.radioButton} onPress={handlePress}>
            <View
              style={[
                styles.radioOuterCircle,
                selected && styles.radioOuterCircleSelected,
              ]}>
              {selected && <View style={styles.radioInnerCircle} />}
            </View>
            <Text style={styles.radioButtonText}>Radio Button</Text>
          </TouchableOpacity>
          {selected && (
            <View style={styles.expandedContent}>
              <Text style={styles.expandedContentText}>View Details</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default OurPlan;
