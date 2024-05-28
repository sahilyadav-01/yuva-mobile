import { StyleSheet } from 'react-native';
import { ROW } from '../../../../styles/constants';
import { getDimensions } from '../../../../utils/utils';

export const styles = () => {
    return StyleSheet.create({
        servicesSubContainer: {
            flexDirection: ROW,
            width: '21.5%'
        },
    });
};