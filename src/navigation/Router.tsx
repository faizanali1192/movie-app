import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {MainNavigationStack} from './stacks/MainNavigationStack';

interface RouterProps {}

export const Router: React.FC<PropsWithChildren<RouterProps>> = () => {
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  );
};
