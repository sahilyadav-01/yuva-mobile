import React from 'react'
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../../../components/Header';
import OurPlan from "../../index"
import { ENTER_PHONE_NUMBER, FAQ_QUESTIONS, FREQUENT_ASKED_QUES, GET_EXPERT_GUIDANCE, OURPLAN, SPEAK_TO } from './constants';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useViewAllOurPlan } from './hooks/useViewAllOurPlan';
import { BLACK } from '../../../../styles/colors';
import { styled } from 'nativewind';

const ViewAllOurPlan = () => {
    const { onUpdate, packageList } = useViewAllOurPlan();
    const renderItem = ({ item, index }) => {
        const onToggle = () => {
            onUpdate(index)
        }
        return (
            <View>
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
            <ScrollView contentContainerStyle={styles.ScrollViewContainerStyle}>
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
                            keyboardType="number-pad"
                            //  onChangeText={onToggle}
                            style={styles.textInputStyle}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.touchableOpacityStyle}>
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
                    <ScrollView>
                        <FlatList
                            data={packageList}
                            keyExtractor={(item) => item?.id}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}
export default ViewAllOurPlan;