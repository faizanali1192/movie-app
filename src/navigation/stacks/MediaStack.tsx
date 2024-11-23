import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteName } from '../../utilities/constants';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';

const Stack = createNativeStackNavigator();

export function MediaStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RouteName.MEDIA}>
      <Stack.Screen name={RouteName.MEDIA} component={DashboardScreen} />
    </Stack.Navigator>
  );
}
