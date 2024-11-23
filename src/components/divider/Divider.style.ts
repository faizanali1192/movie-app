import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      height: 1,
      backgroundColor: theme.pallet.textSecondary,
      width: '100%',
      opacity: 0.5,
    },
  });
};
