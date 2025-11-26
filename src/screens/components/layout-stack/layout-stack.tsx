import {HStack, VStack, Box, Text} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const StackDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={4}>
  <VStack space={2}>
    <Text>VStack</Text>
    <VStack space={2}>
      <Box bg="primary.100" p="3" />
      <Box bg="primary.200" p="3" />
      <Box bg="primary.300" p="3" />
    </VStack>
  </VStack>
  <VStack space={2}>
    <Text>HStack</Text>
    <HStack space={2}>
      <Box bg="secondary.100" p="3" />
      <Box bg="secondary.200" p="3" />
      <Box bg="secondary.300" p="3" />
    </HStack>
  </VStack>
</VStack>`;
  return (
    <DemoWrapper description="Directional stacks with spacing." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <VStack space={2}>
          <Text>VStack</Text>
          <VStack space={2}>
            <Box bg="primary.100" p="3" />
            <Box bg="primary.200" p="3" />
            <Box bg="primary.300" p="3" />
          </VStack>
        </VStack>
        <VStack space={2}>
          <Text>HStack</Text>
          <HStack space={2}>
            <Box bg="secondary.100" p="3" />
            <Box bg="secondary.200" p="3" />
            <Box bg="secondary.300" p="3" />
          </HStack>
        </VStack>
      </VStack>
    </DemoWrapper>
  );
};


