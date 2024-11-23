import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';
import {ss} from '../../theme';
import {EdgeInsets} from 'react-native-safe-area-context';

export const styleProvider = (theme: Theme, insets: EdgeInsets) =>
  StyleSheet.create({
    container: {flex: 1},
    image: {minHeight: ss(470)},
    gradient: {...StyleSheet.absoluteFillObject},
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: ss(theme.spacing.h._2xSmallLt),
    },
    title: {
      fontWeight: '500',
      color: theme.pallet.backgroundPrimary,
      fontFamily: theme.fontFamily.primaryMedium,
      marginBottom: ss(theme.spacing.h._2xSmallLt),
    },
    bottomBtn: {
      backgroundColor: 'transparent',
      marginVertical: ss(theme.spacing.h._2xSmallLt),
      paddingHorizontal: ss(63),
    },
    lowerTitle: {fontFamily: theme.fontFamily.primaryMedium},
    detailsContainer: {
      flex: 1,
      padding: ss(theme.spacing.v.mediumLt),
      marginBottom: insets.bottom,
    },
    chipContainer: {
      flexDirection: 'row',
      marginTop: ss(theme.spacing.h._2xSmallLt),
      marginBottom: ss(theme.spacing.h.small),
    },
    chip: {marginRight: 10},
    overview: {
      fontFamily: theme.fontFamily.primaryMedium,
      marginVertical: ss(theme.spacing.h._1xSmall),
    },
    desc: {
      fontSize: theme.fontSize.medium,
      lineHeight: theme.lineHeight.small,
      color: theme.pallet.textSecondary,
    },
    header: {
      marginTop: insets.top + 10,
      marginHorizontal: ss(theme.spacing.h._1xSmall),
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      color: theme.pallet.backgroundPrimary,
      fontFamily: theme.fontFamily.primaryMedium,
      marginLeft: ss(theme.spacing.h._1xSmall),
    },
  });
