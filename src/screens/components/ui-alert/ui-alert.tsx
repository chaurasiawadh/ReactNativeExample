import {Alert, HStack, VStack, Text, IconButton, CloseIcon} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const AlertDemoScreen: React.FC = () => {
  return (
    <DemoWrapper
      description="Contextual alert banners with statuses."
      code={`<VStack space={3}>
  <Alert w="100%" status="info">
    <HStack justifyContent="space-between" alignItems="center" w="100%">
      <Text>Informational message</Text>
      <IconButton variant="unstyled" icon={<CloseIcon />} />
    </HStack>
  </Alert>
  <Alert w="100%" status="success">
    <Text>Action completed successfully</Text>
  </Alert>
  <Alert w="100%" status="warning">
    <Text>Be careful with this setting</Text>
  </Alert>
  <Alert w="100%" status="error">
    <Text>Error processing your request</Text>
  </Alert>
</VStack>`}
      defaultShowCode
    >
      <VStack space={3}>
        <Alert w="100%" status="info">
          <HStack justifyContent="space-between" alignItems="center" w="100%">
            <Text>Informational message</Text>
            <IconButton variant="unstyled" icon={<CloseIcon />} />
          </HStack>
        </Alert>
        <Alert w="100%" status="success">
          <Text>Action completed successfully</Text>
        </Alert>
        <Alert w="100%" status="warning">
          <Text>Be careful with this setting</Text>
        </Alert>
        <Alert w="100%" status="error">
          <Text>Error processing your request</Text>
        </Alert>
      </VStack>
    </DemoWrapper>
  );
};


