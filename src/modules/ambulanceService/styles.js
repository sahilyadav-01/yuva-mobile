import {StyleSheet} from 'react-native';
import {
  BLACK,
  DOVE_GRAY,
  MARINER,
  PORCELAIN,
  ZUMTHOR,
} from '../../styles/colors';
import {CENTER, ROW, SPACE_BETWEEN} from '../../styles/constants';
import {fonts} from '../../styles/fonts';

export const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: ZUMTHOR,
    borderRadius: 10,
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN,
  },
  headingText: {
    fontFamily: fonts.family.montserrant700,
    fontSize: fonts.size.fontSize15,
    color: MARINER,
    maxWidth: '100%',
  },
  descriptionText: {
    marginBottom: 8,
    marginTop: 4,
    fontFamily: fonts.family.montserrat300,
    fontSize: fonts.size.fontSize12,
    color: BLACK,
  },
  container: {flex: 1, paddingTop: 12, paddingHorizontal: 20},
  descriptionContainer: {
    marginVertical: 12,
  },
  descriptionHeading: {
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize18,
    color: BLACK,
    marginBottom: 4,
  },
  itemContainer: {
    flexDirection: ROW,
    padding: 12,
    justifyContent: SPACE_BETWEEN,
    alignItems: CENTER,
    borderWidth: 0.5,
    borderColor: DOVE_GRAY,
    borderRadius: 8,
    backgroundColor: '#DADADAAF',
    marginBottom: 8,
  },
  itemHeading: {
    fontFamily: fonts.family.montserrat600,
    fontSize: fonts.size.fontSize14,
    color: BLACK,
  },
  itemDescription: {
    fontFamily: fonts.family.monsterrant500,
    fontSize: fonts.size.fontSize10,
    color: DOVE_GRAY,
    maxWidth: '70%',
  },
});
