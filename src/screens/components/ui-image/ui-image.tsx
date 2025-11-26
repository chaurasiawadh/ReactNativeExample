import { HStack, Image } from 'native-base';
import React from 'react';

import { DemoWrapper } from '../../../components/demo-wrapper';

export const ImageDemoScreen: React.FC = () => {
  const uri = 'https://picsum.photos/seed/nativebase/200/200';
  return (
    <DemoWrapper
      description="Displaying images with sizes and rounding."
      code={`<HStack space={4} alignItems="center">
  <Image source={{uri: '${'https://picsum.photos/seed/nativebase/200/200'}'}} alt="random" size="sm" borderRadius="sm" />
  <Image source={{uri: '${'https://picsum.photos/seed/nativebase/200/200'}'}} alt="random" size="md" borderRadius="md" />
  <Image source={{uri: '${'https://picsum.photos/seed/nativebase/200/200'}'}} alt="random" size="lg" borderRadius="xl" />
</HStack>`}
      defaultShowCode
    >
      <HStack space={4} alignItems="center">
        <Image source={{ uri }} alt="random" size="sm" borderRadius="sm" />
        <Image source={{ uri }} alt="random" size="md" borderRadius="md" />
        <Image source={{ uri }} alt="random" size="lg" borderRadius="xl" />
      </HStack>
    </DemoWrapper>
  );
};


