import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.h._1xSmall,
      paddingVertical: theme.spacing.h._3xSmall,
      backgroundColor: theme.pallet.backgroundLight,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInputContainer: {
      flex: 1, // Allow the input to take available space
      marginHorizontal: theme.spacing.h._2xSmall,
    },
    closeIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
