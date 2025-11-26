import {
  VStack,
  Text,
  Box,
  IconButton,
  Icon,
  useToast,
  PresenceTransition,
} from 'native-base';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { demoWrapperStyles } from './demo-wrapper.styles';

interface DemoWrapperProps {
  description?: string;
  children: React.ReactNode;
  code?: string;
  defaultShowCode?: boolean;
}

export const DemoWrapper: React.FC<DemoWrapperProps> = ({
  description,
  children,
  code,
  defaultShowCode = false,
}) => {
  const toast = useToast();
  const hasCode = useMemo(() => typeof code === 'string' && code.trim().length > 0, [code]);

  type ClipboardModule = { default: { setString: (text: string) => void } };
  const handleCopy = (): void => {
    if (!hasCode) {
      toast.show({ description: 'No code available to copy' });
      return;
    }
    try {
      // Lazy-load clipboard to avoid runtime crash before native module is built
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Clipboard = (require('@react-native-clipboard/clipboard') as ClipboardModule).default;
      Clipboard.setString(code ?? '');
      toast.show({ description: 'Code copied to clipboard' });
    } catch (e) {
      toast.show({ description: 'Clipboard unavailable. Rebuild the app to enable copy.' });
    }
  };

  return (
    <ScrollView contentContainerStyle={demoWrapperStyles.container}>
      <VStack space={4}>
        {description ? <Text color="muted.500">{description}</Text> : null}
        <VStack space={4} style={demoWrapperStyles.section}>
          <PresenceTransition
            visible
            initial={{ opacity: 0, translateY: -8 }}
            animate={{ opacity: 1, translateY: 0, transition: { duration: 200 } }}
          >
            <Box>
              {children}
            </Box>
          </PresenceTransition>

          {defaultShowCode && hasCode ? (
            <Box
              style={demoWrapperStyles.codeBox}
              bg="muted.100"
              _dark={{ bg: 'muted.800', borderColor: 'muted.700' }}
              borderRadius="md"
              p="30"
              position="relative"
            >
              <IconButton
                accessibilityLabel="Copy code"
                onPress={handleCopy}
                variant="subtle"
                bg="primary.100"
                borderWidth={0.3}
                borderColor="primary.400"
                borderRadius="md"
                size="md"
                p="2"
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                _pressed={{
                  bg: 'primary.200',
                  borderColor: 'primary.500',
                }}
                position="absolute"
                right="1"
                top="1"
                icon={<Icon as={MaterialIcons} name="content-copy" />}
              />
              <Text style={demoWrapperStyles.codeText} color="muted.700" _dark={{ color: 'muted.100' }}>
                {code}
              </Text>
            </Box>
          ) : null}
        </VStack>
      </VStack>
    </ScrollView>
  );
};
