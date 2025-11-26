import {ZStack, Box, Text} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const ZStackDemoScreen: React.FC = () => {
  const exampleCode = `<ZStack mt="4" alignItems="center" justifyContent="center" h="40">
  <Box bg="primary.200" size="32" rounded="lg" />
  <Box bg="secondary.300" size="24" rounded="lg" />
  <Box bg="emerald.400" size="16" rounded="lg" />
  <Text position="absolute" color="white" bold>Center</Text>
</ZStack>`;
  return (
    <DemoWrapper description="Stack children on top of each other (z-axis)." code={exampleCode} defaultShowCode>
      <ZStack mt="4" alignItems="center" justifyContent="center" h="40">
        <Box bg="primary.200" size="32" rounded="lg" />
        <Box bg="secondary.300" size="24" rounded="lg" />
        <Box bg="emerald.400" size="16" rounded="lg" />
        <Text position="absolute" color="white" bold>Center</Text>
      </ZStack>
    </DemoWrapper>
  );
};


