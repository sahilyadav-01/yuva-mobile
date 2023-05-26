import React from 'react';
import {View, Text} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {SVG} from '../../../../../assets';
import {CYAN_BLUE} from '../../../../styles/colors';
import {styles} from './style';
import {usePlan} from './hooks/usePlan';

const RenderPlans = ({item}) => {
  const {plans, getTests} = usePlan();
  const {
    itemContainer,
    serviceText,
    usageText,
    rowContainer,
    iconContainer,
    inputStyles,
    boxStyles,
    dropdownItemStyles,
    dropdownContainer,
  } = styles();

  return (
    <View style={itemContainer}>
      <View style={rowContainer}>
        <View style={iconContainer}>
          {SVG[plans[item?.serviceUuid]?.icon]({color: CYAN_BLUE, large: true})}
        </View>
        {item?.serviceUuid === 'ee5413dd-eb09-4a99-92d0-a4fc6d92a5e9' ? (
          <View style={dropdownContainer}>
            <SelectList
              search={false}
              setSelected={() => {}}
              data={getTests(item)}
              defaultOption={getTests(item)[0]}
              boxStyles={boxStyles}
              inputStyles={inputStyles}
              dropdownTextStyles={inputStyles}
              dropdownItemStyles={dropdownItemStyles}
            />
          </View>
        ) : (
          <View>
            <Text style={serviceText}>{item?.serviceName}</Text>
            <Text style={usageText}>{`Used -${
              getTests(item)[0]?.used
            } Available -${getTests(item)[0]?.available}`}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default RenderPlans;