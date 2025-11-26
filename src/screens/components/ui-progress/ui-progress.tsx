import {VStack, Progress, Text} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const ProgressDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={4}>
  <VStack space={1}>
    <Text>Default</Text>
    <Progress value={40} />
  </VStack>
  <VStack space={1}>
    <Text>Secondary</Text>
    <Progress value={70} colorScheme="secondary" />
  </VStack>
  <VStack space={1}>
    <Text>Sizes</Text>
    <Progress size="xs" value={30} />
    <Progress size="sm" value={50} />
    <Progress size="md" value={80} />
  </VStack>
</VStack>`;
  return (
    <DemoWrapper description="Linear progress indicators." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <VStack space={1}>
          <Text>Default</Text>
          <Progress value={40} />
        </VStack>
        <VStack space={1}>
          <Text>Secondary</Text>
          <Progress value={70} colorScheme="secondary" />
        </VStack>
        <VStack space={1}>
          <Text>Sizes</Text>
          <Progress size="xs" value={30} />
          <Progress size="sm" value={50} />
          <Progress size="md" value={80} />
        </VStack>
      </VStack>
    </DemoWrapper>
  );
};


