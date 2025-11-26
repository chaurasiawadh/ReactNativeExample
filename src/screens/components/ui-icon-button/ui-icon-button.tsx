import {HStack, Icon, IconButton} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const IconButtonDemoScreen: React.FC = () => {
  const exampleCode = `<HStack space={3}>
  <IconButton variant="solid" icon={<Icon as={MaterialCommunityIcons} name="play" />} />
  <IconButton variant="outline" icon={<Icon as={MaterialCommunityIcons} name="pause" />} />
  <IconButton variant="ghost" icon={<Icon as={MaterialCommunityIcons} name="stop" />} />
</HStack>`;
  return (
    <DemoWrapper description="Buttons that only contain an icon." code={exampleCode} defaultShowCode>
      <HStack space={3}>
        <IconButton variant="solid" icon={<Icon as={MaterialCommunityIcons} name="play" />} />
        <IconButton variant="outline" icon={<Icon as={MaterialCommunityIcons} name="pause" />} />
        <IconButton variant="ghost" icon={<Icon as={MaterialCommunityIcons} name="stop" />} />
      </HStack>
    </DemoWrapper>
  );
};


