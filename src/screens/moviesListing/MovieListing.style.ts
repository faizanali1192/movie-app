import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';
import {ss} from '../../theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: ss(theme.spacing.h._1xSmall),
    },
    innerContainer: {
      flex: 1,
      backgroundColor: theme.pallet.backgroundLight,
      paddingVertical: ss(theme.spacing.h._1xSmall),
    },
    image: {borderRadius: 10, minHeight: ss(180)},
    imageContainer: {paddingVertical: 10},
  });
};
