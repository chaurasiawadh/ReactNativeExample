import {Center, Box, Text} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const CenterDemoScreen: React.FC = () => {
  const exampleCode = `<Center h="32" bg="muted.100">
  <Box bg="primary.200" p="3" rounded="md">
    <Text>Centered box</Text>
  </Box>
</Center>`;
  return (
    <DemoWrapper description="Center children on both axes." code={exampleCode} defaultShowCode>
      <Center h="32" bg="muted.100">
        <Box bg="primary.200" p="3" rounded="md">
          <Text>Centered box</Text>
        </Box>
      </Center>
    </DemoWrapper>
  );
};


