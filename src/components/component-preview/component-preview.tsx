import {Box, Heading, VStack, PresenceTransition} from 'native-base';
import React from 'react';

interface ComponentPreviewProps {
  title?: string;
  children: React.ReactNode;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({title = 'Preview', children}) => {
  return (
    <VStack space={2}>
      <Heading size="sm">{title}</Heading>
      <PresenceTransition visible initial={{opacity: 0, translateY: -8}} animate={{opacity: 1, translateY: 0, transition: {duration: 200}}}>
        <Box borderWidth="1" borderColor="muted.200" borderRadius="md" p="4" bg="white">
          {children}
        </Box>
      </PresenceTransition>
    </VStack>
  );
};


