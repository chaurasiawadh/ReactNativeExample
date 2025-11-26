import {Button, Modal, Text, VStack} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const ModalDemoScreen: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <DemoWrapper
      description="Centered modal dialog with header and footer."
      code={`<VStack space={4}>
  <Button onPress={() => setOpen(true)}>Open Modal</Button>
  <Modal isOpen={open} onClose={() => setOpen(false)}>
    <Modal.Content>
      <Modal.CloseButton />
      <Modal.Header>Example Modal</Modal.Header>
      <Modal.Body>
        <Text>This is a NativeBase modal body content.</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button.Group space={2}>
          <Button variant="ghost" onPress={() => setOpen(false)}>Cancel</Button>
          <Button onPress={() => setOpen(false)}>Okay</Button>
        </Button.Group>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
</VStack>`}
      defaultShowCode
    >
      <VStack space={4}>
        <Button onPress={() => setOpen(true)}>Open Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Example Modal</Modal.Header>
            <Modal.Body>
              <Text>This is a NativeBase modal body content.</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" onPress={() => setOpen(false)}>Cancel</Button>
                <Button onPress={() => setOpen(false)}>Okay</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </VStack>
    </DemoWrapper>
  );
};


