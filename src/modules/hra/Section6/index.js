import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import * as Progress from 'react-native-progress';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import PickerData from '../../../utils/PickerData';
import { dispatch_option } from '../../../store/reducers/Section6Slice';
import Header from '../../../components/Header';
import { BUTTON_TEXT, LOGGEDIN, QUESTION_TYPE_INPUT, QUESTION_TYPE_PICKER, SECTION_6_HEADING } from '../constant';
import { useSection6 } from './hooks/useSection6';
import { styles } from './styles';
import { GREEN, PALE_GOLDENROD } from '../../../styles/colors';
import { styles as hraStyles } from '../HRAHome/styles';
import Loader from '../../../components/Loader';

const Section6 = () => {

    const { loggedIn, onPressRightIcon, progressWidth, questionData, answers, next, renderData } = useSection6();

    if(!renderData) return <Loader extraStyles={hraStyles.loaderContainer}/>;
    return (
        <>
            <Header isRightIcon={true} />
            <View style={styles.progressBarContainer}>
                <Progress.Bar color={GREEN} unfilledColor={PALE_GOLDENROD} progress={0.6} width={progressWidth} height={12} />
            </View>
            <View style={styles.topContainer}>
                <Text style={styles.topContainerTextStyle}>{SECTION_6_HEADING}</Text>
                <View style={styles.scrollViewContainer}>
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={questionData}
                            keyExtractor={item => item.questionId}
                            renderItem={({ item }) => {
                                switch (true) {
                                    case item.questionType.includes(QUESTION_TYPE_PICKER):
                                        return (
                                            <SectionPicker
                                                key={item.questionId}
                                                text={item.question}
                                                data={PickerData[item.questionType]}
                                                defaultAnswer={PickerData[item.questionType][answers[item.questionId]]?.value ?? ''}
                                                dispatcher={dispatch_option}
                                                questionId={item.questionId}
                                            />
                                        );
                                    case item.questionType.includes(QUESTION_TYPE_INPUT):
                                        return (
                                            <SectionInput
                                                key={item.questionId}
                                                defValue={PickerData[item.questionType][answers[item.questionId]]?.value ?? ''}
                                                text={item.question}
                                                dispatcher={dispatch_option}
                                                questionId={item.questionId}
                                            />
                                        );
                                    default:
                                        return null;
                                }
                            }}
                        />
                        <View style={styles.touchableOpacityViewContainer}>
                            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={next}>
                                <Text style={styles.touchableOpacityTextStyle}>{BUTTON_TEXT}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Section6
