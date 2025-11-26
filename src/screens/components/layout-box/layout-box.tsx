import {Box, HStack, Text, VStack} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const BoxDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={4}>
  <Box bg="primary.100" p="4" rounded="md">
    <Text>Box with padding and background</Text>
  </Box>
  <HStack space={3}>
    <Box bg="secondary.100" p="3" rounded="sm">
      <Text>Box A</Text>
    </Box>
    <Box borderWidth={1} borderColor="muted.300" p="3" rounded="sm">
      <Text>Box B</Text>
    </Box>
  </HStack>
</VStack>`;
  return (
    <DemoWrapper title="Box" description="Primitive layout container with padding, margin, borders." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <Box bg="primary.100" p="4" rounded="md">
          <Text>Box with padding and background</Text>
        </Box>
        <HStack space={3}>
          <Box bg="secondary.100" p="3" rounded="sm">
            <Text>Box A</Text>
          </Box>
          <Box borderWidth={1} borderColor="muted.300" p="3" rounded="sm">
            <Text>Box B</Text>
          </Box>
        </HStack>
      </VStack>
    </DemoWrapper>
  );
};


