import { StyleSheet } from 'react-native';
import { BLACK, MARINER, WHITE } from '../../styles/colors';
import { CENTER, ROW, SPACE_BETWEEN } from '../../styles/constants';
import { fonts } from '../../styles/fonts';

export const styles = () => {
    return StyleSheet.create({
        servicesSubContainer: {
            backgroundColor: WHITE,
            flexDirection: ROW,
            justifyContent:SPACE_BETWEEN
        },
    });
};