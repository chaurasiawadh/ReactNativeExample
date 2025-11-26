import {Avatar, HStack} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const AvatarDemoScreen: React.FC = () => {
  const exampleCode = `<HStack space={4}>
  <Avatar size="sm">NB</Avatar>
  <Avatar size="md" bg="secondary.500">RN</Avatar>
  <Avatar size="lg" source={{uri: 'https://i.pravatar.cc/100?img=1'}} />
  <Avatar size="xl" source={{uri: 'https://i.pravatar.cc/100?img=2'}} />
</HStack>`;
  return (
    <DemoWrapper description="User avatars with sizes and fallbacks." code={exampleCode} defaultShowCode>
      <HStack space={4}>
        <Avatar size="sm">NB</Avatar>
        <Avatar size="md" bg="secondary.500">RN</Avatar>
        <Avatar size="lg" source={{uri: 'https://i.pravatar.cc/100?img=1'}} />
        <Avatar size="xl" source={{uri: 'https://i.pravatar.cc/100?img=2'}} />
      </HStack>
    </DemoWrapper>
  );
};


