import { StyleSheet } from 'react-native';
import { BLACK, MARINER, WHITE } from '../../../../styles/colors';
import { CENTER, ROW, SPACE_BETWEEN } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';

export const styles = () => {
    return StyleSheet.create({
        servicesSubContainer: {
            backgroundColor: WHITE,
            flexDirection: ROW,
            justifyContent:SPACE_BETWEEN
        },
        container: {marginTop:20,paddingHorizontal: 20},
        heading: {
            color: BLACK,
            fontFamily: fonts.family.montserrat600,
            fontSize: fonts.size.fontSize18,
        },
        headingContainer: {
            flexDirection:ROW,
            justifyContent:SPACE_BETWEEN,
            alignItems:CENTER,
            marginBottom: 12
        },
        viewAllText: {
            fontFamily: fonts.family.monsterrant500,
            fontSize: fonts.size.fontSize12,
            color: MARINER,
        }
    });
};