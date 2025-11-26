import {Button, AlertDialog, Text} from 'native-base';
import React, {useRef, useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const AlertDialogDemoScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
  return (
    <DemoWrapper
      description="Destructive action confirmation dialog."
      code={`<Button onPress={() => setIsOpen(true)}>Delete item</Button>
<AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <AlertDialog.Content>
    <AlertDialog.CloseButton />
    <AlertDialog.Header>Delete</AlertDialog.Header>
    <AlertDialog.Body>
      <Text>Are you sure? This action cannot be undone.</Text>
    </AlertDialog.Body>
    <AlertDialog.Footer>
      <Button.Group space={2}>
        <Button variant="ghost" ref={cancelRef} onPress={() => setIsOpen(false)}>Cancel</Button>
        <Button colorScheme="error" onPress={() => setIsOpen(false)}>Delete</Button>
      </Button.Group>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog>`}
      defaultShowCode
    >
      <Button onPress={() => setIsOpen(true)}>Delete item</Button>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete</AlertDialog.Header>
          <AlertDialog.Body>
            <Text>Are you sure? This action cannot be undone.</Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" ref={cancelRef} onPress={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="error" onPress={() => setIsOpen(false)}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </DemoWrapper>
  );
};


