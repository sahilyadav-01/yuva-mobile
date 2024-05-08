import React from 'react';
import {View, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {styles} from './style';
import {
  onPrivacyPolicyPress,
  onTermsConditionsPress,
} from '../../../../utils/utils';
import { CYAN_BLUE, MARINER } from '../../../../styles/colors';

function TermsContainer({onCheckboxPress, checked}) {
  return (
    <View style={styles.termsContainer}>
      <View style={styles.checkBoxContainer}>
        <Checkbox.Android
          color={MARINER}
          uncheckedColor={CYAN_BLUE}
          status={checked === true ? 'checked' : 'unchecked'}
          onPress={() => onCheckboxPress(checked)}
        />
      </View>
      <Text style={styles.termsAndCondtion}>
        By clicking on the below button, you agree to our{' '}
        <Text
          onPress={onTermsConditionsPress}
          style={[styles.termsAndCondtion, styles.termsTextStyle]}>
          Terms & Conditions
        </Text>{' '}
        and{' '}
        <Text
          onPress={onPrivacyPolicyPress}
          style={[styles.termsAndCondtion, styles.termsTextStyle]}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}

export default TermsContainer;
