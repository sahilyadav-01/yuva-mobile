
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const usePlanCard = (item) => {
  const { ourPlanData } = useSelector(state => state.programAndPlan);
  const {loggedIn} = useSelector(state => state.auth);
  const navigation = useNavigation();

  const bookOurPlan = () => {
      if(loggedIn === 'loggedIn') {
          alert("Hiiiiiiiiiii")
          // navigation.navigate(ADDRESS,{plan:true})
      } 
      // else {
      //     // navigation.navigate('Home',{screen:LOGIN_SCREEN, params: { from: 'OurPlanDetailsGuest'} });
      // }
  }
  return {
    bookOurPlan,
    ourPlanData
  };
}
