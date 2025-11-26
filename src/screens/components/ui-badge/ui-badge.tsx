import {HStack, VStack, Badge} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const BadgeDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={4}>
  <HStack space={2}>
    <Badge colorScheme="primary">Primary</Badge>
    <Badge colorScheme="secondary">Secondary</Badge>
    <Badge colorScheme="success">Success</Badge>
    <Badge colorScheme="warning">Warning</Badge>
    <Badge colorScheme="error">Error</Badge>
  </HStack>
  <HStack space={2}>
    <Badge variant="solid">Solid</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="subtle">Subtle</Badge>
  </HStack>
</VStack>`;
  return (
    <DemoWrapper description="Status indicators with colors and variants." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <HStack space={2}>
          <Badge colorScheme="primary">Primary</Badge>
          <Badge colorScheme="secondary">Secondary</Badge>
          <Badge colorScheme="success">Success</Badge>
          <Badge colorScheme="warning">Warning</Badge>
          <Badge colorScheme="error">Error</Badge>
        </HStack>
        <HStack space={2}>
          <Badge variant="solid">Solid</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="subtle">Subtle</Badge>
        </HStack>
      </VStack>
    </DemoWrapper>
  );
};


