import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SVG} from '../../assets/svg/svgs';
import {ss, useThemedStyle} from '../../theme';
import SearchInput, {SearchInputProps} from '../searchInput/SearchInput';
import TextComponent from '../textComponent/TextComponent';
import {styleProvider} from './Header.styles';

interface HeaderProps extends SearchInputProps {}

const Header: React.FC<HeaderProps> = ({...rest}) => {
  const styles = useThemedStyle(styleProvider);
  const [headerState, setHeaderState] = useState<'titleState' | 'searchState'>(
    'titleState',
  );

  return (
    <View style={styles.container}>
      {headerState === 'titleState' ? (
        <View style={styles.containerOne}>
          <TextComponent style={styles.title}>Watch</TextComponent>
          <TouchableOpacity onPress={() => setHeaderState('searchState')}>
            <SVG.SearchIcon height={ss(22)} width={ss(22)} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.containerTwo}>
          <SearchInput
            {...rest}
            onPressCloseIcon={() => setHeaderState('titleState')}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(Header);
