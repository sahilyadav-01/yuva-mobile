import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SVG } from '../../../assets';
import { AGE } from './consants';
import styles from './styles';

const SelectedMember = ({ dependents,openModal }) => {
    const { dependentsContainer, dependentNameGenderContainer, relationText, dependentName, dependentGender, EditIcon,dependenView ,textSpacing,relationView,relationBottomView} = styles({
        disabled: false,
    });
    const renderItems = (item) => {
        return (
            <View style={dependentsContainer} key={item?.index}>
                <View style={dependentNameGenderContainer}>
                    <View style={dependenView}>
                        <Text style={dependentName}>{item?.item?.name}</Text>
                        <Text style={textSpacing}>|</Text>
                        <Text style={dependentGender}>{item?.item?.gender}</Text>
                        <Text style={textSpacing}>|</Text>
                        <Text style={dependentGender}>{`${AGE}${item?.item?.age}`}</Text>
                        <TouchableOpacity style={EditIcon} onPress={openModal}><SVG.EditPen /></TouchableOpacity>
                    </View>
                </View>
                <View style={relationView} />
                <Text style={relationText}>{`${item?.item?.relation}`}</Text>
                <View style={relationBottomView} />
            </View>
        );
    }
    return (
        <View >
            <FlatList
                renderItem={renderItems}
                data={Object.values({ dependents })}
                keyExtractor={(item, index) => `${index}`}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
            />
        </View>
    )
}

export default SelectedMember;