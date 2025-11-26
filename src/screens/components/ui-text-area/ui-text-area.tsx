import {VStack, TextArea} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const TextAreaDemoScreen: React.FC = () => {
  return (
    <DemoWrapper
      description="Multiline input with variants and sizes."
      code={`<VStack space={4}>
  <TextArea h={20} placeholder="Default" />
  <TextArea variant="filled" h={20} placeholder="Filled" />
  <TextArea variant="underlined" h={16} placeholder="Underlined" />
</VStack>`}
      defaultShowCode
    >
      <VStack space={4}>
        <TextArea h={20} placeholder="Default" />
        <TextArea variant="filled" h={20} placeholder="Filled" />
        <TextArea variant="underlined" h={16} placeholder="Underlined" />
      </VStack>
    </DemoWrapper>
  );
};


