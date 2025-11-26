import React from 'react';
import {FlatList, HStack, Icon, IconButton, Input, Text, VStack} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

export const SearchBarDemoScreen: React.FC = () => {
  const data = React.useMemo(
    () => ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Grapes', 'Mango', 'Orange', 'Pineapple', 'Strawberry'],
    [],
  );
  const [query, setQuery] = React.useState<string>('');
  const filtered = React.useMemo(
    () => data.filter(item => item.toLowerCase().includes(query.trim().toLowerCase())),
    [data, query],
  );

  const previewCode = `<HStack space={2} alignItems="center">
  <Input
    flex={1}
    placeholder="Search"
    value={query}
    onChangeText={setQuery}
    InputLeftElement={<Icon as={MaterialIcons} name="search" ml="2" color="muted.400" />}
    InputRightElement={
      query ? <IconButton icon={<Icon as={MaterialIcons} name="close" />} onPress={() => setQuery('')} /> : null
    }
  />
</HStack>`;

  return (
    <DemoWrapper description="A simple search bar that filters a list in real time.">
      <VStack space={6}>
        <ComponentPreview>
          <VStack space={3} w="100%">
            <HStack alignItems="center" space={2}>
              <Input
                flex={1}
                placeholder="Search"
                value={query}
                onChangeText={setQuery}
                InputLeftElement={<Icon as={MaterialIcons} name="search" ml="2" color="muted.400" />}
                InputRightElement={
                  query ? (
                    <IconButton
                      onPress={() => setQuery('')}
                      icon={<Icon as={MaterialIcons} name="close" color="muted.400" />}
                    />
                  ) : undefined
                }
              />
            </HStack>
            <FlatList
              data={filtered}
              keyExtractor={item => item}
              renderItem={({item}) => <Text py="2">{item}</Text>}
              ListEmptyComponent={<Text color="muted.400">No results</Text>}
            />
          </VStack>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


