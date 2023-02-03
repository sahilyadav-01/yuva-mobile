import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const useHeader = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isIntroScreen = (route?.name === 'IntroScreen');
  const canGoBack = navigation?.canGoBack();
  const {isRightIcon, isSeachVisible, title} = props;
  const {loggedIn} = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const onPressRightIcon = () => {
    if(!isLoggedIn) {
      navigation.navigate('LoginScreen');
    } else {
      // navigation.toggleDrawer();
    }
  };
  const onBackPress = () => {
    navigation.goBack();
  }

  return {
    isLoggedIn,
    onPressRightIcon,
    isRightIcon,
    isSeachVisible,
    isIntroScreen,
    canGoBack,
    onBackPress,
    title,
  };
}