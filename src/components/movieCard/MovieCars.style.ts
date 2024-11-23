import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      // borderRadius: 10,
    },
    title: {
      marginTop: 'auto',
      color: theme.pallet.backgroundPrimary,
      fontFamily: theme.fontFamily.primary,
      fontWeight: 500,
      padding: 20,
      fontSize: theme.fontSize.large,
    },
  });
};
