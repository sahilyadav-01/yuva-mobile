import { StyleSheet } from 'react-native';
import { CYAN_BLUE } from '../../../styles/colors';
import { CENTER } from '../../../styles/constants';
import { fonts } from '../../../styles/fonts';

export const styles = StyleSheet.create({
  mainViewContainerStyle: {
    flex: 1
  },
  CardViewContainerStyle: {
    marginTop: '10%',
    flex: 1
  },
  NoOrderText: {
    textAlign: CENTER,
    marginVertical: "40%",
    fontFamily: fonts.family.rubik500,
    fontSize: fonts.size.fontSize16,
    color: CYAN_BLUE,
  },
});