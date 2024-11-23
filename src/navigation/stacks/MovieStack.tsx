import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesListing from '../../screens/moviesListing/MoviesListing';
import {RouteName} from '../../utilities/constants';
import MovieDetails from '../../screens/movieDetails/MovieDetails';

const Stack = createNativeStackNavigator();

export function MovieStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RouteName.MOVIE_LISTING}>
      <Stack.Screen name={RouteName.MOVIE_LISTING} component={MoviesListing} />
    </Stack.Navigator>
  );
}
