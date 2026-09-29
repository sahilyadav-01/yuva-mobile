import {StyleSheet} from 'react-native';
import {WHITE, BLACK, RED, MARINER} from '../../styles/colors';
import {CENTER, TOP} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  AddAddressLine: {
    marginBottom: 8,
    color: BLACK,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize12,
  },
  textInputStyle: {
    paddingLeft: 12,
    borderWidth: 0.5,
    borderColor: '#D1D1D1',
    backgroundColor: WHITE,
    borderRadius: 6,
    marginBottom: 12,
    color: BLACK,
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize14,
    textAlignVertical: TOP,
  },
  boxStyles: {
    backgroundColor: WHITE,
    color: BLACK,
  },
  touchableButton: {
    justifyContent: CENTER,
    backgroundColor: MARINER,
    marginTop: 24,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    alignItems: CENTER,
  },
  textBook: {
    textAlign: CENTER,
    color: WHITE,
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize16,
  },
  contentContainerStyle: {
    flex: 1,
    marginTop: 20,
  },
  borderAddNewAddress: {
    backgroundColor: WHITE,
    flex: 1,
  },
  errorContact: {
    color: RED,
  },
  pickerContainer: {
    borderWidth: 0.5,
    borderColor: '#D1D1D1',
    borderRadius: 6,
    padding: 2,
  },
});
