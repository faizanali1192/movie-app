import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

export interface ImageComponentProps extends FastImageProps {
  imageURL?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  imageURL,
  mainContainerStyle,
  resizeMode = FastImage.resizeMode.cover,
  children,
  ...rest
}) => {
  return (
    <View style={mainContainerStyle}>
      <FastImage
        source={imageURL ? {uri: imageURL} : undefined}
        resizeMode={resizeMode}
        {...rest}>
        {children}
      </FastImage>
    </View>
  );
};

export default React.memo(ImageComponent);
