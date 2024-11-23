import React from 'react';
import {useThemedStyle} from '../../theme';
import ImageComponent, {
  ImageComponentProps,
} from '../imageComponent/ImageComponent';
import TextComponent from '../textComponent/TextComponent';
import {styleProvider} from './MovieCars.style';

interface MovieCardProps extends ImageComponentProps {
  title?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({title, ...rest}) => {
  const styles = useThemedStyle(styleProvider);

  return (
    <ImageComponent {...rest}>
      {!!title && <TextComponent style={styles.title}>{title}</TextComponent>}
    </ImageComponent>
  );
};

export default MovieCard;
