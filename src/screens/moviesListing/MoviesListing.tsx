import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import CustomFlatList from '../../components/customFlatList/CustomFlatlist';
import Header from '../../components/header/Header';
import MovieCard from '../../components/movieCard/MovieCard';
import SafeAreaView from '../../components/safeAreaView/SafeAreaView';
import {useThemedStyle} from '../../theme';
import {RouteName} from '../../utilities/constants';
import {styleProvider} from './MovieListing.style';
import {useMovieListing} from './useMovieListing';
import WithLoading from '../../components/withLoading/WithLoading';

type RootStackParamList = {};
type MoviesListingScreenProps = NativeStackScreenProps<RootStackParamList>;
type StackNavigationProp = {
  navigate: (screen: string, params: {movieId: number}) => void;
};

const MoviesListing: React.FC<MoviesListingScreenProps> = ({}) => {
  const navigation = useNavigation<StackNavigationProp>();

  const styles = useThemedStyle(styleProvider);
  const [searchValue, setSearchValue] = useState('');
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useMovieListing();

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleNavigateToDetails = (movieId: number) => {
    navigation.navigate(RouteName.MOVIE_DETAILS, {movieId});
  };

  return (
    <SafeAreaView ignoreBottomInsets>
      <WithLoading loading={isLoading}>
        <View style={styles.container}>
          <Header
            placeholder="Tv shows, movies, and more"
            onSearchValueChange={setSearchValue}
          />
        </View>
        <View style={styles.innerContainer}>
          <CustomFlatList
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            data={data?.pages.flatMap(page => page.results) ?? []}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => handleNavigateToDetails(item.id)}>
                  <MovieCard
                    imageURL={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
                    style={styles.image}
                    mainContainerStyle={styles.imageContainer}
                    title={item.title}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id.toString()}
            onRefresh={refetch}
            isLoadingMore={isFetchingNextPage}
            emptyListMessage="No items to display"
            contentContainerStyle={{padding: 16}}
            maintainVisibleContentPosition={{
              minIndexForVisible: 0,
            }}
          />
        </View>
      </WithLoading>
    </SafeAreaView>
  );
};

export default MoviesListing;
