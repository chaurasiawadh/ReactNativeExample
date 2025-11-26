import {Box, HStack, Icon, IconButton, Text, useToast} from 'native-base';
import React from 'react';
import { ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {codeBlockStyles} from './code-block-with-copy.styles';

interface CodeBlockWithCopyProps {
  code: string;
  label?: string;
}

export const CodeBlockWithCopy: React.FC<CodeBlockWithCopyProps> = ({code, label = 'Code'}) => {
  const toast = useToast();

  type ClipboardModule = { default: { setString: (text: string) => void } };
  const handleCopy = (): void => {
    try {
      // Lazy require to avoid crash before native module available
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Clipboard = (require('@react-native-clipboard/clipboard') as ClipboardModule).default;
      Clipboard.setString(code);
      toast.show({description: 'Copied!'});
    } catch {
      toast.show({description: 'Clipboard unavailable. Rebuild to enable copy.'});
    }
  };

  return (
    <Box borderWidth="1" borderColor="muted.200" borderRadius="md" overflow="hidden" bg="muted.100">
      <HStack alignItems="center" justifyContent="space-between" px="3" py="2" bg="muted.200">
        <Text fontSize="xs" color="muted.600">{label}</Text>
        <IconButton
          accessibilityLabel="Copy code"
          icon={<Icon as={MaterialIcons} name="content-copy" size="sm" />}
          onPress={handleCopy}
        />
      </HStack>
      <ScrollView horizontal bounces={false}>
        <Box p="3">
          <Text style={codeBlockStyles.codeText}>
            {code}
          </Text>
        </Box>
      </ScrollView>
    </Box>
  );
};


