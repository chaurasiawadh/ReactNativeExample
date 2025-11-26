import { HStack, Icon } from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { DemoWrapper } from '../../../components/demo-wrapper';

export const IconDemoScreen: React.FC = () => {
  const exampleCode = `<HStack space={4}>
  <Icon as={MaterialCommunityIcons} name="home" size="lg" color="primary.500" />
  <Icon as={MaterialCommunityIcons} name="account" size="lg" color="secondary.500" />
  <Icon as={MaterialCommunityIcons} name="bell-outline" size="lg" color="emerald.500" />
</HStack>`;
  return (
    <DemoWrapper
      description="Vector icons via react-native-vector-icons."
      code={exampleCode}
      defaultShowCode
    >
      <HStack space={4}>
        <Icon as={MaterialCommunityIcons} name="home" size="lg" color="primary.500" />
        <Icon as={MaterialCommunityIcons} name="account" size="lg" color="secondary.500" />
        <Icon as={MaterialCommunityIcons} name="bell-outline" size="lg" color="emerald.500" />
      </HStack>
    </DemoWrapper>
  );
};


