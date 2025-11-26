import {Pressable, Box, Text} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const PressableDemoScreen: React.FC = () => {
  const exampleCode = `<Pressable onPress={() => {}}>
  {({isPressed}) => (
    <Box p="4" bg={isPressed ? 'primary.200' : 'primary.100'} rounded="md">
      <Text>{isPressed ? 'Pressed' : 'Press me'}</Text>
    </Box>
  )}
</Pressable>`;
  return (
    <DemoWrapper description="Press interactions with pressed state." code={exampleCode} defaultShowCode>
      <Pressable onPress={() => { return; }}>
        {({isPressed}) => (
          <Box
            p="4"
            bg={isPressed ? 'primary.200' : 'primary.100'}
            rounded="md"
          >
            <Text>{isPressed ? 'Pressed' : 'Press me'}</Text>
          </Box>
        )}
      </Pressable>
    </DemoWrapper>
  );
};


