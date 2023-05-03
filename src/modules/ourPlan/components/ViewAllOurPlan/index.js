import React from 'react'
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../../../components/Header';
import OurPlan from "../../index"
import { ENTER_PHONE_NUMBER,  FREQUENT_ASKED_QUES, GET_EXPERT_GUIDANCE, OURPLAN, PLEASE_ENTER_CORRECT_NUMBER, SPEAK_TO } from './constants';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useViewAllOurPlan } from './hooks/useViewAllOurPlan';
import { BLACK, DARK_GRAY } from '../../../../styles/colors';

const ViewAllOurPlan = () => {
    const { onUpdate, packageList,errorState,onRequestCall,onChangeContact } = useViewAllOurPlan();
    const renderItem = ({ item, index }) => {
        const onToggle = () => {
            onUpdate(index)
        }
        return (
            <View key={index}>
                {!item?.isExpanded ?
                    <View style={styles.fqaQuestionView} key={index}>

                        <Text style={styles.faqQuestion}>{item?.Headers}</Text>
                        <TouchableOpacity style={styles.plusIcon} onPress={onToggle}>
                            <Icon name="plus" size={35} color={BLACK} />
                        </TouchableOpacity>
                    </View>
                    : <View style={styles.fqaQuestionView} key={index}>
                        <View style={styles.faqAnswerView}>
                            <Text style={styles.faqQuestion}>{item?.Headers}</Text>
                            <Text style={styles.faqAnswers}>{item?.details[0]?.details}</Text>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.plusIcon} onPress={onToggle}>
                                <Icon name="plus" size={35} color={BLACK} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        )
    }

    return (
        <View>
            <Header showBackButton={true} title={OURPLAN} />
            <ScrollView contentContainerStyle={styles.ScrollViewContainerStyle} nestedScrollEnabled={true}>
                <View style={styles.OurplanView}>
                    <OurPlan isHomeScreen={false} />
                </View>
                <View style={styles.numberView}>
                    <View style={styles.subNumberView}>
                        <Text style={styles.sudHeaderText}>{GET_EXPERT_GUIDANCE}</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={ENTER_PHONE_NUMBER}
                            placeholderTextColor={DARK_GRAY}
                            keyboardType="number-pad"
                            onChangeText={onChangeContact}
                            style={styles.textInputStyle}
                        />
                            {errorState && (
                            <Text style={styles.errorContact}>{PLEASE_ENTER_CORRECT_NUMBER}</Text>
                        )}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.touchableOpacityStyle} onPress={onRequestCall}>
                            <Text style={styles.touchableOpacityTextStyle}>
                                {SPEAK_TO}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.frequentText}>
                        {FREQUENT_ASKED_QUES}
                    </Text>
                </View>
                <View style={styles.frequentView}>
                    <ScrollView nestedScrollEnabled={true}>
                        <FlatList
                            data={packageList}
                            keyExtractor={(item, index) => `${index}`}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            nestedScrollEnabled={true}
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}
export default ViewAllOurPlan;