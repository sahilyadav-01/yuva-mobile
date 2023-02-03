import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const useHeader = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isIntroScreen = (route?.name === 'IntroScreen');
  const {isRightIcon, isSeachVisible} = props;
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const onPressRightIcon = () => {
    if(!isLoggedIn) {
      navigation.navigate('LoginScreen');
    } else {
      // navigation.toggleDrawer();
    }
  }

  return {
    isLoggedIn,
    onPressRightIcon,
    isRightIcon,
    isSeachVisible,
    isIntroScreen,
  };
}