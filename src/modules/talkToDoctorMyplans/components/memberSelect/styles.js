import { StyleSheet } from 'react-native';
import { MARINER, WHITE } from '../../../../styles/colors';
import { CENTER } from '../../../../styles/constants';
import { fonts } from '../../../../styles/fonts';

export const styles = StyleSheet.create({
    touchableButton: {
        backgroundColor: MARINER,
        marginTop: 40,
        marginHorizontal: 13,
        borderRadius: 8,
        minHeight: 48,
    },
    buttonText: {
        paddingVertical:12,
        textAlign: CENTER,
        color: WHITE,
        fontFamily: fonts.family.monsterrant500,
        fontSize: fonts.size.fontSize16,
    }
})
