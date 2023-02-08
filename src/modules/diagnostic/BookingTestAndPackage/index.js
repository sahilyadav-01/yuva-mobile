import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
// import SelectList from 'react-native-dropdown-select-list'
// import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
 import { styles } from './styles';
// import { DARK_BLUE } from '../../../../styles/colors';
// import { ABOUT_TEST, BOOK_NOW, INSTRUCTIONS, LAB, LOCATION, MYSELF, NULL, PINCODE, RESCHEDULE, SELECT, TIME } from './constants';
import Header from '../../../components/Header';
 import { useBookingTestAndPackage } from './hooks/useBookingTestAndPackage';


const BookingTestAndPackage = () => {

     const {
  
        packageDetails,
 
 } = useBookingTestAndPackage();

console.log(packageDetails,"fdfdfdfdfddf")
    return (
        // <View>
        //     <Header />
        //     <ScrollView
        //         contentContainerStyle={styles.contentContainerStyle}>
        //         <View style={styles.booksID}>
        //             {!bookedDetailsById ? (
        //                 <View>
        //                     {testDetails && packageDetails === '' ? (
        //                         <View>
        //                             <View>
        //                                 <Text style={styles.booked}>
        //                                     {testDetails?.name}
        //                                 </Text>
        //                             </View>
        //                             <View>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {ABOUT_TEST}
        //                                 </Text>
        //                                 <Text style={styles.color}>{testDetails?.description}</Text>

        //                                 <Text style={styles.bookingDetails}>
        //                                     {INSTRUCTIONS}
        //                                 </Text>
        //                                 <Text style={styles.color}>{testDetails?.instruction}</Text>
        //                             </View>
        //                         </View>
        //                     ) : (
        //                         <View>
        //                             <View>
        //                                 <Text style={styles.booked}>
        //                                     {packageDetails?.packageName}
        //                                 </Text>
        //                             </View>
        //                             <View>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {ABOUT_TEST}
        //                                 </Text>
        //                                 <Text style={styles.color}>{packageDetails?.description}</Text>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {INSTRUCTIONS}
        //                                 </Text>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {packageDetails?.totalTest} {LAB}
        //                                 </Text>
        //                                 {packageDetails &&
        //                                     packageDetails.attributeResponseDtoList.map((item, index) => {
        //                                         return (

        //                                             <View style={styles.itemView}>
        //                                                 <Text style={styles.itemText}>
        //                                                     {item?.attributeName}
        //                                                 </Text>
        //                                             </View>
        //                                         );
        //                                     })}
        //                             </View>
        //                         </View>
        //                     )}
        //                 </View>
        //             ) : (
        //                 <View>
        //                     {bookedDetailsById && !bookedDetailsById.packageName ? (
        //                         <View>
        //                             <View>
        //                                 <Text style={styles.booked}>
        //                                     {bookedDetailsById?.testName[0]}
        //                                 </Text>
        //                             </View>
        //                             <View>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {ABOUT_TEST}
        //                                 </Text>
        //                                 <Text style={styles.color}>{bookedDetailsById?.testOrPackageDescription}</Text>

        //                                 <Text style={styles.bookingDetails}>
        //                                     {INSTRUCTIONS}
        //                                 </Text>
        //                                 <Text style={styles.color}>{bookedDetailsById?.instruction}</Text>
        //                             </View>
        //                         </View>
        //                     ) : (
        //                         <View>
        //                             <View>
        //                                 <Text style={styles.booked}>
        //                                     {bookedDetailsById?.packageName}
        //                                 </Text>
        //                             </View>
        //                             <View>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {ABOUT_TEST}
        //                                 </Text>
        //                                 <Text style={styles.color}>{bookedDetailsById.description}</Text>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {INSTRUCTIONS}
        //                                 </Text>
        //                                 <Text style={styles.bookingDetails}>
        //                                     {bookedDetailsById.testName.length}{LAB}
        //                                 </Text>
        //                                 {bookedDetailsById.testName &&
        //                                     bookedDetailsById.testName.map((item, index) => {
        //                                         return (

        //                                             <View style={styles.itemView}>
        //                                                 <Text style={styles.itemText}>
        //                                                     {item}
        //                                                 </Text>
        //                                             </View>
        //                                         );
        //                                     })}
        //                             </View>
        //                         </View>
        //                     )}
        //                 </View>
        //             )}
                    


        //         </View>
        //     </ScrollView>
        // </View>
        <View><Text>nnnnnnnnnnnnnnnnnnnnnnnnnn</Text></View>
    );
};

export default BookingTestAndPackage;