import {HStack, Spinner, Text, VStack} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const SpinnerDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={4} alignItems="center">
  <HStack space={4} alignItems="center">
    <Spinner accessibilityLabel="loading" />
    <Text>Loading</Text>
  </HStack>
  <HStack space={4}>
    <Spinner size="sm" />
    <Spinner size="lg" color="secondary.500" />
  </HStack>
</VStack>`;
  return (
    <DemoWrapper description="Loading indicators with sizes and colors." code={exampleCode} defaultShowCode>
      <VStack space={4} alignItems="center">
        <HStack space={4} alignItems="center">
          <Spinner accessibilityLabel="loading" />
          <Text>Loading</Text>
        </HStack>
        <HStack space={4}>
          <Spinner size="sm" />
          <Spinner size="lg" color="secondary.500" />
        </HStack>
      </VStack>
    </DemoWrapper>
  );
};


