import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SVG} from '../../assets/svg/svgs';
import Chip from '../../components/chip/Chip';
import CustomButton from '../../components/customButton/CustomButton';
import Divider from '../../components/divider/Divider';
import ImageComponent from '../../components/imageComponent/ImageComponent';
import TextComponent from '../../components/textComponent/TextComponent';
import {ss, useThemedStyle} from '../../theme';
import {styleProvider} from './MovieDetails.style';
import {useMovieDetails} from './useMovieDetails';
import WithLoading from '../../components/withLoading/WithLoading';

type RootStackParamList = {
  MovieDetails: {movieId: number};
};

type MoviesDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MovieDetails'
>;

const MovieDetails: React.FC<MoviesDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const styles = useThemedStyle(styleProvider);
  const {movieId} = route.params;
  const {data, isLoading} = useMovieDetails(movieId);

  return (
    <WithLoading loading={isLoading}>
      <ScrollView style={styles.container} bounces={false}>
        <ImageComponent
          imageURL={`https://image.tmdb.org/t/p/w400/${data?.poster_path}`}
          style={styles.image}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']}
            style={styles.gradient}
          />
          <TouchableOpacity
            style={styles.header}
            onPress={() => navigation.goBack()}>
            <SVG.NavigationIcon height={ss(18)} width={ss(18)} />
            <TextComponent style={styles.headerTitle}>Watch</TextComponent>
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            <TextComponent style={styles.title}>
              In theaters December 22, 2021
            </TextComponent>
            <CustomButton title="Get Tickets" onPress={() => {}} />
            <CustomButton
              title="Watch Trailer"
              onPress={() => {}}
              style={styles.bottomBtn}
            />
          </View>
        </ImageComponent>

        <View style={styles.detailsContainer}>
          <TextComponent style={styles.lowerTitle}>Genres</TextComponent>
          <View style={styles.chipContainer}>
            {['Action', 'Thriller', 'Science', 'Fiction'].map(
              (genre, index) => (
                <Chip
                  key={index}
                  text={genre}
                  color={getGenreColor(genre)}
                  style={styles.chip}
                />
              ),
            )}
          </View>
          <Divider />
          <TextComponent style={styles.overview}>Overview</TextComponent>
          <TextComponent style={styles.desc}>{data?.overview}</TextComponent>
        </View>
      </ScrollView>
    </WithLoading>
  );
};

const getGenreColor = (genre: string) => {
  const colors: {[key: string]: string} = {
    Action: '#15D2BC',
    Thriller: '#E26CA5',
    Science: '#564CA3',
    Fiction: '#CD9D0F',
  };
  return colors[genre] || '#000';
};

export default MovieDetails;
