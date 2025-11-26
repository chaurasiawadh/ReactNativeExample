import {HStack, Skeleton, VStack} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const SkeletonDemoScreen: React.FC = () => {
  return (
    <DemoWrapper
      description="Placeholder loading skeletons."
      code={`<VStack space={4}>
  <HStack space={3}>
    <Skeleton size="10" rounded="full" />
    <VStack flex={1} space={2}>
      <Skeleton h="3" />
      <Skeleton h="3" w="2/3" />
    </VStack>
  </HStack>
  <Skeleton.Text lines={4} />
</VStack>`}
      defaultShowCode
    >
      <VStack space={4}>
        <HStack space={3}>
          <Skeleton size="10" rounded="full" />
          <VStack flex={1} space={2}>
            <Skeleton h="3" />
            <Skeleton h="3" w="2/3" />
          </VStack>
        </HStack>
        <Skeleton.Text lines={4} />
      </VStack>
    </DemoWrapper>
  );
};


