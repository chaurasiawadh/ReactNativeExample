import React from 'react';
import {Box, HStack, Pressable, Text, VStack, useColorMode} from 'native-base';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

export const TabViewDemoScreen: React.FC = () => {
  const { colorMode } = useColorMode();
  const [index, setIndex] = React.useState<number>(0);
  const tabs = React.useMemo(() => ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'], []);

  const previewCode = `// Simplified Tab View (no extra deps)
const [index, setIndex] = React.useState(0);
const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

<Box>
  <HStack>
    {tabs.map((title, i) => {
      const isActive = i === index;
      return (
        <Pressable key={title} onPress={() => setIndex(i)} style={{ flex: 1 }}>
          <Box borderBottomWidth="3" borderColor={isActive ? 'cyan.500' : 'coolGray.200'} p="3" alignItems="center">
            <Text color={isActive ? '#000' : '#6b7280'}>{title}</Text>
          </Box>
        </Pressable>
      );
    })}
  </HStack>
  <Box p="4">
    <Text>Content for {tabs[index]}</Text>
  </Box>
</Box>`;

  const renderContent = React.useMemo(() => {
    switch (index) {
      case 0:
        return <Text>Content for Tab 1</Text>;
      case 1:
        return <Text>Content for Tab 2</Text>;
      case 2:
        return <Text>Content for Tab 3</Text>;
      default:
        return <Text>Content for Tab 4</Text>;
    }
  }, [index]);

  return (
    <DemoWrapper description="A simple tab view built with NativeBase components (no extra dependencies).">
      <VStack space={6}>
        <ComponentPreview>
          <Box w="100%">
            <HStack>
              {tabs.map((title, i) => {
                const isActive = i === index;
                const color = isActive
                  ? (colorMode === 'dark' ? '#e5e5e5' : '#000')
                  : (colorMode === 'dark' ? '#a1a1aa' : '#1f2937');
                const borderColor = isActive ? 'cyan.500' : (colorMode === 'dark' ? 'gray.400' : 'coolGray.200');
                return (
                  <Box key={title} flex={1} alignItems="center">
                    <Pressable onPress={() => setIndex(i)} w="100%">
                      <Box borderBottomWidth="3" borderColor={borderColor} p="3" alignItems="center">
                        <Text style={{color}}>{title}</Text>
                      </Box>
                    </Pressable>
                  </Box>
                );
              })}
            </HStack>
            <Box p="4">{renderContent}</Box>
          </Box>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


