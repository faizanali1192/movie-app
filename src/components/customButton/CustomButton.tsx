import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from 'react-native';
import { useThemedStyle } from '../../theme';
import { styleProvider } from './CustomButton.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
}) => {
  const styles = useThemedStyle(styleProvider);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        style, // Allow overriding styles via props
      ]}
      onPress={onPress}
      disabled={disabled || loading} // Disable button if loading or explicitly disabled
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {icon && icon}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomButton;
