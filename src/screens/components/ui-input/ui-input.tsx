import { HStack, Input, Icon, VStack, Text } from 'native-base';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { DemoWrapper } from '../../../components/demo-wrapper';

export const InputDemoScreen: React.FC = () => {
  const [value, setValue] = useState('');
  const exampleCode = `<VStack space={4}>
  <Input placeholder="Default" value={value} onChangeText={setValue} />
  <Input variant="filled" placeholder="Filled" />
  <Input variant="underlined" placeholder="Underlined" />
  <HStack space={3}>
    <Input
      flex={1}
      placeholder="With left icon"
      InputLeftElement={<Icon as={MaterialCommunityIcons} name="email-outline" ml="3" />}
    />
    <Input
      flex={1}
      placeholder="With right icon"
      InputRightElement={<Icon as={MaterialCommunityIcons} name="eye-outline" mr="3" />}
      type="password"
    />
  </HStack>
  <VStack space={2}>
    <Text>Sizes</Text>
    <HStack space={2}>
      <Input size="sm" placeholder="sm" />
      <Input size="md" placeholder="md" />
      <Input size="lg" placeholder="lg" />
    </HStack>
  </VStack>
</VStack>`;
  return (
    <DemoWrapper description="Text input with left/right elements and variants." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <Input placeholder="Default" value={value} onChangeText={setValue} />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="underlined" placeholder="Underlined" />
        <HStack space={3}>
          <Input
            flex={1}
            placeholder="With left icon"
            InputLeftElement={<Icon as={MaterialCommunityIcons} name="email-outline" ml="3" />}
          />
          <Input
            flex={1}
            placeholder="With right icon"
            InputRightElement={<Icon as={MaterialCommunityIcons} name="eye-outline" mr="3" />}
            type="password"
          />
        </HStack>
        <VStack space={2}>
          <Text>Sizes</Text>
          <HStack space={2}>
            <Input size="sm" placeholder="sm" />
            <Input size="md" placeholder="md" />
            <Input size="lg" placeholder="lg" />
          </HStack>
        </VStack>
      </VStack>
    </DemoWrapper>
  );
};


