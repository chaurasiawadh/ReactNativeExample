import React from 'react';
import {Box, Center, HStack, Icon, IconButton, StatusBar, Text, VStack, useColorMode} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

export const AppBarDemoScreen: React.FC = () => {
  const { colorMode } = useColorMode();
  const statusBg = colorMode === 'dark' ? 'violet.900' : 'violet.700';
  const safeTopBg = colorMode === 'dark' ? 'violet.900' : 'violet.600';
  const appBarBg = colorMode === 'dark' ? 'violet.700' : 'violet.800';
  const iconColor = '#fff';

  const previewCode = `<StatusBar bg="#3700B3" barStyle="light-content" />
<Box safeAreaTop bg="violet.600" />
<HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
  <HStack alignItems="center" space={2}>
    <IconButton icon={<Icon as={MaterialIcons} name="menu" color="white" />} />
    <Text color="white" fontSize="20" fontWeight="bold">Home</Text>
  </HStack>
  <HStack space={1}>
    <IconButton icon={<Icon as={MaterialIcons} name="favorite" color="white" />} />
    <IconButton icon={<Icon as={MaterialIcons} name="search" color="white" />} />
    <IconButton icon={<Icon as={MaterialIcons} name="more-vert" color="white" />} />
  </HStack>
</HStack>`;

  return (
    <DemoWrapper description="A simple top app bar with a title and action icons.">
      <VStack space={6}>
        <ComponentPreview>
          <Center>
            <StatusBar bg={statusBg} barStyle="light-content" />
            <Box safeAreaTop bg={safeTopBg} w="100%" />
            <HStack
              bg={appBarBg}
              px="1"
              py="3"
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              maxW="400"
              borderRadius="md"
            >
              <HStack alignItems="center" space={2}>
                <IconButton icon={<Icon as={MaterialIcons} name="menu" color={iconColor} size="sm" />} />
                <Text color="white" fontSize="lg" fontWeight="bold">
                  Home
                </Text>
              </HStack>
              <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color={iconColor} />} />
                <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color={iconColor} />} />
                <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color={iconColor} />} />
              </HStack>
            </HStack>
          </Center>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


