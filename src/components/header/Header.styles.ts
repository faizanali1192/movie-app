import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';
import {ss} from '../../theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {},
    containerOne: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: ss(theme.spacing.h._1xSmall),
    },
    title: {
      fontFamily: theme.fontFamily.primary,
    },
    containerTwo: {
      backgroundColor: theme.pallet.backgroundPrimary,
      paddingVertical: 16,
    },
  });
};
