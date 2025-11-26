import {Heading, VStack} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const HeadingDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={2}>
  <Heading size="xs">Heading xs</Heading>
  <Heading size="sm">Heading sm</Heading>
  <Heading size="md">Heading md</Heading>
  <Heading size="lg">Heading lg</Heading>
  <Heading size="xl">Heading xl</Heading>
  <Heading size="2xl">Heading 2xl</Heading>
</VStack>`;
  return (
    <DemoWrapper description="Typography scale using theme fonts." code={exampleCode} defaultShowCode>
      <VStack space={2}>
        <Heading size="xs">Heading xs</Heading>
        <Heading size="sm">Heading sm</Heading>
        <Heading size="md">Heading md</Heading>
        <Heading size="lg">Heading lg</Heading>
        <Heading size="xl">Heading xl</Heading>
        <Heading size="2xl">Heading 2xl</Heading>
      </VStack>
    </DemoWrapper>
  );
};


