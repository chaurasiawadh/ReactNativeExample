import {HStack, Switch, Text, VStack} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const SwitchDemoScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const exampleCode = `<VStack space={4}>
  <HStack space={3} alignItems="center">
    <Text>Default</Text>
    <Switch isChecked={isEnabled} onToggle={() => setIsEnabled(prev => !prev)} />
  </HStack>
  <HStack space={3} alignItems="center">
    <Text>Secondary sm</Text>
    <Switch size="sm" colorScheme="secondary" />
  </HStack>
  <HStack space={3} alignItems="center">
    <Text>Disabled</Text>
    <Switch isDisabled />
  </HStack>
</VStack>`;
  return (
    <DemoWrapper description="Toggle switch with color schemes and sizes." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <HStack space={3} alignItems="center">
          <Text>Default</Text>
          <Switch isChecked={isEnabled} onToggle={() => setIsEnabled(prev => !prev)} />
        </HStack>
        <HStack space={3} alignItems="center">
          <Text>Secondary sm</Text>
          <Switch size="sm" colorScheme="secondary" />
        </HStack>
        <HStack space={3} alignItems="center">
          <Text>Disabled</Text>
          <Switch isDisabled />
        </HStack>
      </VStack>
    </DemoWrapper>
  );
};


