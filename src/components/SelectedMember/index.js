import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SVG } from '../../../assets';
import { AGE_ } from './consants';
import styles from './styles';

const SelectedMember = ({ dependents,openModal }) => {
    const { dependentsContainer, dependentNameGenderContainer, relationText, dependentName, dependentGender, EditIcon } = styles({
        disabled: false,
    });
    const renderItems = (item, index) => {
        return (
            <View style={dependentsContainer}>
                <View style={dependentNameGenderContainer}>
                    <View style={{ flexDirection: 'row',flex:1 }}>
                        <Text style={dependentName}>{item?.item?.name}</Text>
                        <Text style={{ marginHorizontal: 14 }}>|</Text>
                        <Text style={dependentGender}>{item?.item?.gender}</Text>
                        <Text style={{ marginHorizontal: 14 }}>|</Text>
                        <Text style={dependentGender}>{`${AGE_}${item?.item?.age}`}</Text>
                        <TouchableOpacity style={EditIcon} onPress={openModal}><SVG.EditPen /></TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 14 }} />
                <Text style={relationText}>{`${item?.item?.relation}`}</Text>
                <View style={{ height: 20 }} />
            </View>
        );
    }
    return (
        <View >
            <FlatList
                renderItem={renderItems}
                data={Object.values({ dependents })}
                keyExtractor={(item) => item?.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default SelectedMember;