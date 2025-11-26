import React from 'react';
import {Box, Button, HStack, Pressable, Text, VStack, FlatList} from 'native-base';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

type Item = { id: string; title: string };

export const SwipeListDemoScreen: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>(
    Array.from({length: 6}).map((_, i) => ({id: String(i + 1), title: `Row ${i + 1}`})),
  );
  const [revealed, setRevealed] = React.useState<Record<string, boolean>>({});

  const toggleReveal = React.useCallback((id: string) => {
    setRevealed(prev => ({...prev, [id]: !prev[id]}));
  }, []);

  const handleDelete = React.useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const previewCode = `// Simplified swipe list (tap "Reveal" to show actions)
const [revealed, setRevealed] = React.useState<Record<string, boolean>>({});
const toggleReveal = (id: string) => setRevealed(prev => ({ ...prev, [id]: !prev[id] }));

<FlatList
  data={items}
  keyExtractor={i => i.id}
  renderItem={({ item }) => {
    const isOpen = !!revealed[item.id];
    return (
      <Box my="2" overflow="hidden" borderRadius="md">
        {isOpen && (
          <HStack bg="coolGray.200" p="2" justifyContent="flex-end" space="2">
            <Button size="sm" colorScheme="secondary">More</Button>
            <Button size="sm" colorScheme="danger">Delete</Button>
          </HStack>
        )}
        <Pressable onPress={() => toggleReveal(item.id)}>
          <Box bg="white" p="4"><Text>{item.title}</Text></Box>
        </Pressable>
      </Box>
    );
  }}
/>`;

  return (
    <DemoWrapper description="A simplified swipe list experience without extra dependencies (tap to reveal actions).">
      <VStack space={6}>
        <ComponentPreview>
          <FlatList
            data={items}
            keyExtractor={i => i.id}
            renderItem={({item}) => {
              const isOpen = !!revealed[item.id];
              return (
                <Box my="2" overflow="hidden" borderRadius="md">
                  {isOpen ? (
                    <HStack bg="coolGray.200" p="2" justifyContent="flex-end" space={2}>
                      <Button onPress={() => toggleReveal(item.id)} size="sm" colorScheme="secondary">
                        More
                      </Button>
                      <Button onPress={() => handleDelete(item.id)} size="sm" colorScheme="danger">
                        Delete
                      </Button>
                    </HStack>
                  ) : null}
                  <Pressable onPress={() => toggleReveal(item.id)}>
                    <Box bg="white" _dark={{bg: 'gray.800'}} p="4">
                      <HStack alignItems="center" justifyContent="space-between">
                        <Text>{item.title}</Text>
                        <Text color="primary.600">{isOpen ? 'Hide' : 'Reveal'}</Text>
                      </HStack>
                    </Box>
                  </Pressable>
                </Box>
              );
            }}
          />
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


