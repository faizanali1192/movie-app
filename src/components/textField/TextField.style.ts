import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      borderRadius: 30,
    },

    label: {
      fontSize: 14,
      color: theme.pallet.textPrimary,
      marginBottom: 4,
    },
    input: {
      height: 40,
      borderRadius: 30,
      borderColor: theme.pallet.backgroundLight,
      backgroundColor: theme.pallet.backgroundLight,
      borderWidth: 1,
      paddingHorizontal: 8,
      fontSize: 16,
    },
  });
};
