import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      borderRadius: 16,
      paddingVertical: 6,
      paddingHorizontal: 10,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    text: {
      fontSize: theme.fontSize.medium,
      fontFamily: theme.fontFamily.primaryMedium,
      color:theme.pallet.backgroundPrimary
    },
  });
};
