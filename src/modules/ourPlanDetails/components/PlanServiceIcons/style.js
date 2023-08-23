import { StyleSheet } from 'react-native';
import { WHITE } from '../../../../styles/colors';
import { ROW } from '../../../../styles/constants';

export const styles = () => {
    return StyleSheet.create({
        servicesSubContainer: {
            flexDirection: ROW,
            paddingHorizontal: 16
        },
    });
};