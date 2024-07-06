import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../constants';
import {
  CommunityScreen,
  SettingsScreen,
  UpdatesScreen,
  SplashScreen,
  CallsScreen,
  ChatsScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Screens.SPLASH}
    >
      <Stack.Screen name={Screens.COMMUNITY} component={CommunityScreen} />
      <Stack.Screen name={Screens.SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={Screens.UPDATES} component={UpdatesScreen} />
      <Stack.Screen name={Screens.SPLASH} component={SplashScreen} />
      <Stack.Screen name={Screens.CALLS} component={CallsScreen} />
      <Stack.Screen name={Screens.CHATS} component={ChatsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
