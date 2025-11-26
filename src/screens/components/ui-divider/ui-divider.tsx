import {Divider, VStack, Text} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const DividerDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={3}>
  <Text>Above</Text>
  <Divider />
  <Text>Below</Text>
</VStack>`;
  return (
    <DemoWrapper description="Separators with orientation." code={exampleCode} defaultShowCode>
      <VStack space={3}>
        <Text>Above</Text>
        <Divider />
        <Text>Below</Text>
      </VStack>
    </DemoWrapper>
  );
};


