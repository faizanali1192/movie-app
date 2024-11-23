import React from 'react';
import {View} from 'react-native';
import {useThemedStyle} from '../../theme';
import {styleProvider} from './Divider.style';

const Divider = () => {
  const styles = useThemedStyle(styleProvider);
  return <View style={styles.container} />;
};

export default Divider;
