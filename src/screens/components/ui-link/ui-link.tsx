import { Link, VStack } from 'native-base';
import React from 'react';

import { DemoWrapper } from '../../../components/demo-wrapper';

export const LinkDemoScreen: React.FC = () => {
  const exampleCode = `<VStack space={2}>
  <Link href="https://docs.nativebase.io/getting-started" isExternal>
    NativeBase Docs
  </Link>
  <Link href="https://reactnavigation.org" color="secondary.600" isExternal>
    React Navigation
  </Link>
</VStack>`;
  return (
    <DemoWrapper description="External links and styled links." code={exampleCode} defaultShowCode>
      <VStack space={2}>
        <Link href="https://docs.nativebase.io/getting-started" isExternal>
          NativeBase Docs
        </Link>
        <Link href="https://reactnavigation.org" color="secondary.600" isExternal>
          React Navigation
        </Link>
      </VStack>
    </DemoWrapper>
  );
};


