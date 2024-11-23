import React, {useState, useEffect, useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ss, useThemedStyle} from '../../theme';
import TextField, {TextFieldProps} from '../textField/TextField';
import {styleProvider} from './SearchInput.style';
import {SVG} from '../../assets/svg/svgs';
import debounce from 'lodash/debounce';

export interface SearchInputProps
  extends Omit<TextFieldProps, 'label' | 'onChangeText' | 'value'> {
  onSearchValueChange?: (text: string) => void;
  onPressCloseIcon?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearchValueChange,
  onPressCloseIcon,
  ...rest
}) => {
  const styles = useThemedStyle(styleProvider);
  const [value, setValue] = useState('');

  const debouncedSearch = useCallback(
    debounce((text: string) => onSearchValueChange?.(text), 300),
    [onSearchValueChange],
  );

  const handleChange = (text: string) => {
    setValue(text);
    debouncedSearch(text);
  };

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleClosePress = () => {
    handleChange('');
    onPressCloseIcon?.();
  };
  return (
    <View style={styles.container}>
      <SVG.SearchIcon height={ss(22)} width={ss(22)} />
      <View style={styles.textInputContainer}>
        <TextField {...rest} onChangeText={handleChange} value={value} />
      </View>
      <TouchableOpacity
        style={styles.closeIconContainer}
        onPress={handleClosePress}>
        <SVG.CloseIcon height={ss(30)} width={ss(30)} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchInput);
