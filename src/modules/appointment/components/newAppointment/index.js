import React from 'react';
import {View, Text, TextInput, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import GoBackCross from '../../../../components/GoBackCross';
import {DateTimePicker} from '@hashiprobr/react-native-paper-datetimepicker';
import ActionButton from '../../../../components/ActionButton';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import MessageBox from '../../../../components/MessageBox';
import {useNew} from './hooks/useNew';
import {BOOK_AN_APPOINTMENT} from '../../constant';
import {CITRINE_WHITE, DARK_BLUE, GREEN, LIGHT_MERCURY, WHITE} from '../../../../styles/colors';
import SelectList from 'react-native-dropdown-select-list';
import {
  ADD_DESCRIPTION,
  BOOKING_FOR,
  BOOK_APPOINTMENT,
  CONTACT_NUMBER,
  DATE,
  DESC,
  MESSAGE,
  MYSELF,
  PATIENT_CONTACT_NUMBER,
  SELECT_DATE_TIME,
  SELECT_MEMBER,
  SELECT_MEMBER_HERE,
  TIME,
} from './constant';
import {useRoute} from '@react-navigation/native';
import {PNG, SVG} from '../../../../../assets';
import { getDaysOfMonth, getSlots } from '../../../../utils/utils';
import { BLACK_LIGHT_OPACITY } from '../../../../styles/colors';
import { BLACK_OPACITY } from '../../../../styles/colors';

const NewAppointments = () => {
  const days = getDaysOfMonth();
  console.log('Days',days);
  const route = useRoute();
  const {Doctor, Specialization, plan, userVersion, uuid, version} =
    route.params;
  const {doctorId, name, specialization} = useSelector(
    state => state.appointment.appointment,
  );

  const {
    goBack,
    signupFlag,
    signupMessage,
    newAppointment,
    onChangeDescription,
    onChaneNumber,
    closeMessageBox,
    handleDate,
    handleTime,
    date,
    time,
    setSelected,
    dataRelation,
    selected,
  } = useNew(plan, userVersion, uuid, version);
  return (
    <View>
      <ScrollView>
        <Text style={styles.TitleStyle}>{BOOK_AN_APPOINTMENT}</Text>

        <View style={styles.border}>
          <View style={styles.ImageStyle}>
            <Image source={PNG.ICON} style={styles.Image} />
            <View>
              <Text style={styles.NameStyle}>{Doctor}</Text>
              <Text style={styles.ContentStyle}>{Specialization}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.TitleStyle}>{ADD_DESCRIPTION}</Text>

        <View style={styles.border}>
          <Text style={styles.Description}>{DESC}</Text>
          <TextInput
            style={styles.textInputStyle}
            multiline={true}
            onChangeText={onChangeDescription}
          />
        </View>
        <Text style={styles.TitleStyle}>{SELECT_DATE_TIME}</Text>
        <View style={styles.border}>
          {/* <View style={styles.dateAndTime}>
            <Text style={styles.dateTimeStyles}>{DATE}</Text>
            <DateTimePicker
              type="date"
              value={date}
              onChangeDate={handleDate}
              style={styles.dateTimePicker}
              selectionColor={LIGHT_MERCURY}
              theme={styles.theme}
              minimumDate={new Date()}
            />
          </View> */}
          {/* <View style={styles.dateAndTime}>
            <Text style={styles.dateTimeStyles}>{TIME}</Text>
            <DateTimePicker
              type="time"
              value={time}
              onChangeDate={handleTime}
              style={styles.dateTimePicker}
              selectionColor={DARK_BLUE}
              theme={styles.theme}
            />
          </View> */}
        </View>
        <FlatList contentContainerStyle={{paddingHorizontal:24,marginBottom:32}} ItemSeparatorComponent={()=><View style={{width:20}}/>} horizontal={true} keyExtractor={(item,index)=>index} data={getDaysOfMonth()} renderItem={({item,index})=>{
          return (
            <View style={{paddingTop:12,backgroundColor:'white',borderRadius:12,borderWidth:1,borderColor:'white'}}>
              {/* <Text style={{marginHorizontal:40}}>Icon</Text> */}
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <SVG.Calender/>
              </View>
              <Text style={{marginHorizontal:40,textAlign:'center',marginTop:6}}>14 Apr</Text>
              <Text style={{marginHorizontal:44,textAlign:'center',marginTop:2}}>Fri</Text>
              <View style={{backgroundColor:CITRINE_WHITE,flex:1,borderBottomLeftRadius:12,borderBottomRightRadius:12,borderTopLeftRadius:6,borderTopRightRadius:6,paddingVertical:4,alignItems:'center',justifyContent:'center',marginTop:4}}>
            <Text style={{color:GREEN}}>Available</Text>
              </View>
            </View>
          );
        }}/>
        <FlatList contentContainerStyle={{backgroundColor:WHITE}} keyExtractor={(index)=>index} data={getSlots().filter(item=>{if(typeof item?.length === 'number') return item})} renderItem={({item})=>{
          return  <View style={{marginHorizontal:16,paddingHorizontal:16}}>
          <Text>{item[0]?.type}</Text>
          <View style={{marginVertical:16}}>
              {<FlatList numColumns={2}  keyExtractor={(index)=>index} data={item} renderItem={({i,index})=>{
                return <View style={{flex:1,alignItems:index%2 === 0 ? 'flex-start' : 'flex-end'}}>
                 <TouchableOpacity onPress={()=>{
                  const startTime = parseInt(item[index]?.from.replace(':00',''));
                  const after12 = item[index]?.type === 'Morning' ? false : true;
                  console.log('Item',after12 ? startTime + 12 : startTime)
                 }} style={{paddingHorizontal:20,paddingVertical:4,borderRadius:12,borderWidth:2,marginBottom:12,borderColor:BLACK_OPACITY}}>
                  <Text>{`${item[index]?.from}:00`}-{`${item[index]?.to}:00`}</Text>
                 </TouchableOpacity>
                </View>
              }}/>}
            </View>
            </View>
        }}/>
        <View>
          <Text style={styles.TitleStyle}>{BOOKING_FOR}</Text>
          <View style={styles.borderSelect}>
            <Text style={styles.ContentHeading}>{SELECT_MEMBER}</Text>
            <SelectList
              boxStyles={
                selected.length > 0
                  ? styles.boxStyles
                  : [styles.boxStyles, styles.backGroundStyle]
              }
              defaultOption={{key:"null", value: MYSELF}}
              setSelected={setSelected}
              data={dataRelation}
              dropdownStyles={styles.dropStyles}
              inputStyles={styles.valueStyle}
            />
          </View>
        </View>
        <View>
          <Text style={styles.TitleStyle}>{PATIENT_CONTACT_NUMBER}</Text>
          <View style={styles.border}>
            <TextInput
              style={styles.textInputStyle}
              placeholder={CONTACT_NUMBER}
              keyboardType={'numeric'}
              onChangeText={onChaneNumber}
            />
          </View>
        </View>
        <View>
          <ActionButton onPress={newAppointment} name={BOOK_APPOINTMENT} />
        </View>
        <MessageBox
          head={MESSAGE}
          showDialog={signupFlag}
          hideDialog={closeMessageBox}
          message={signupMessage}
        />
      </ScrollView>
    </View>
  );
};

export default NewAppointments;
