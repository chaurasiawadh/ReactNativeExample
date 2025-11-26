import {Text, VStack} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const TextDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={2}>
  <Text>This is default text.</Text>
  <Text color="muted.500">Muted text using theme tokens.</Text>
  <Text bold italic underline>Emphasis styles</Text>
  <Text fontSize="lg" color="primary.600">Large primary colored text</Text>
</VStack>`;
  return (
    <DemoWrapper description="Body text with color and formatting." code={exampleCode} defaultShowCode>
      <VStack space={2}>
        <Text>This is default text.</Text>
        <Text color="muted.500">Muted text using theme tokens.</Text>
        <Text bold italic underline>
          Emphasis styles
        </Text>
        <Text fontSize="lg" color="primary.600">
          Large primary colored text
        </Text>
      </VStack>
    </DemoWrapper>
  );
};


