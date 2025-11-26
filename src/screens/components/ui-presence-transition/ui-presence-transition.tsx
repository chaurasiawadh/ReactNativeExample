import {Button, PresenceTransition, Box, VStack} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const PresenceTransitionDemoScreen: React.FC = () => {
  const [show, setShow] = useState(true);
  const exampleCode = `<VStack space={4}>
  <Button onPress={() => setShow(prev => !prev)}>{show ? 'Hide' : 'Show'}</Button>
  <PresenceTransition
    visible={show}
    initial={{opacity: 0, scale: 0.9}}
    animate={{opacity: 1, scale: 1, transition: {duration: 250}}}
  >
    <Box bg="secondary.200" p="5" rounded="md" />
  </PresenceTransition>
</VStack>`;
  return (
    <DemoWrapper description="Animate mounting and unmounting." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <Button onPress={() => setShow(prev => !prev)}>{show ? 'Hide' : 'Show'}</Button>
        <PresenceTransition
          visible={show}
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1, transition: {duration: 250}}}
        >
          <Box bg="secondary.200" p="5" rounded="md" />
        </PresenceTransition>
      </VStack>
    </DemoWrapper>
  );
};


