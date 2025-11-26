import {Button, HStack, useToast} from 'native-base';
import React from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const ToastDemoScreen: React.FC = () => {
  const toast = useToast();
  const exampleCode = `<HStack space={3} flexWrap="wrap">
  <Button onPress={() => toast.show({ description: 'Hello world', placement: 'top' })}>
    Default
  </Button>
  <Button colorScheme="success" onPress={() => toast.show({ description: 'SUCCESS notification', placement: 'top', status: 'success' })}>
    Success
  </Button>
  <Button colorScheme="error" onPress={() => toast.show({ description: 'ERROR notification', placement: 'top', status: 'error' })}>
    Error
  </Button>
  <Button colorScheme="warning" onPress={() => toast.show({ description: 'WARNING notification', placement: 'top', status: 'warning' })}>
    Warning
  </Button>
  <Button variant="outline" onPress={() => toast.closeAll()}>
    Close All
  </Button>
</HStack>`;
  const show = (status?: 'success' | 'error' | 'warning' | 'info'): void => {
    toast.show({
      description: status ? `${status.toUpperCase()} notification` : 'Hello world',
      placement: 'top',
      ...(status ? {status} : {}),
    });
  };
  return (
    <DemoWrapper
      description="Transient feedback messages."
      code={exampleCode}
      defaultShowCode
    >
      <HStack space={3} flexWrap="wrap">
        <Button onPress={() => show()}>Default</Button>
        <Button colorScheme="success" onPress={() => show('success')}>Success</Button>
        <Button colorScheme="error" onPress={() => show('error')}>Error</Button>
        <Button colorScheme="warning" onPress={() => show('warning')}>Warning</Button>
        <Button variant="outline" onPress={() => toast.closeAll()}>Close All</Button>
      </HStack>
    </DemoWrapper>
  );
};


