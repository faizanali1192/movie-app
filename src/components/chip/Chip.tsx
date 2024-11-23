import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import TextComponent from '../textComponent/TextComponent';
import {useThemedStyle} from '../../theme';
import {styleProvider} from './Chip.styles';

interface ChipProps {
  text: string;
  color: string;
  style?: StyleProp<ViewStyle>;
}

const Chip: React.FC<ChipProps> = ({text, color, style}) => {
  const styles = useThemedStyle(styleProvider);

  return (
    <View style={[styles.container, {backgroundColor: color}, style]}>
      <TextComponent style={styles.text}>{text}</TextComponent>
    </View>
  );
};

export default Chip;
