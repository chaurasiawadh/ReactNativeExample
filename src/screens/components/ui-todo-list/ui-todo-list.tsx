import React from 'react';
import {Box, Button, HStack, Icon, IconButton, Input, Text, VStack} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

type TodoItem = { title: string; isCompleted: boolean };

export const TodoListDemoScreen: React.FC = () => {
  const [items, setItems] = React.useState<TodoItem[]>([
    {title: 'Build UI', isCompleted: false},
    {title: 'Fix bugs', isCompleted: true},
  ]);
  const [input, setInput] = React.useState<string>('');

  const handleAdd = React.useCallback(() => {
    const title = input.trim();
    if (!title) {return;}
    setItems(prev => [{title, isCompleted: false}, ...prev]);
    setInput('');
  }, [input]);

  const handleDelete = React.useCallback((index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleStatusChange = React.useCallback((index: number) => {
    setItems(prev => prev.map((it, i) => (i === index ? {...it, isCompleted: !it.isCompleted} : it)));
  }, []);

  const previewCode = `<HStack space={2}>
  <Input flex={1} value={input} onChangeText={setInput} placeholder="Add a task" />
  <Button onPress={handleAdd}>Add</Button>
</HStack>
<VStack mt="4" space={3}>
  {items.map((item, i) => (
    <HStack key={i} alignItems="center" justifyContent="space-between">
      <Text
        strikeThrough={item.isCompleted}
        onPress={() => handleStatusChange(i)}
      >
        {item.title}
      </Text>
      <IconButton
        size="sm"
        colorScheme="trueGray"
        icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />}
        onPress={() => handleDelete(i)}
      />
    </HStack>
  ))}
</VStack>`;

  return (
    <DemoWrapper description="A simple Todo List with add, toggle complete, and delete actions.">
      <VStack space={6}>
        <ComponentPreview>
          <Box w="100%">
            <HStack space={2}>
              <Input flex={1} value={input} onChangeText={setInput} placeholder="Add a task" />
              <Button onPress={handleAdd}>Add</Button>
            </HStack>
            <VStack mt="4" space={3}>
              {items.map((item, i) => (
                <HStack key={`${item.title}-${i}`} alignItems="center" justifyContent="space-between">
                  <Text
                    strikeThrough={item.isCompleted}
                    color={item.isCompleted ? 'gray.400' : 'coolGray.800'}
                    _dark={{color: item.isCompleted ? 'gray.400' : 'coolGray.50'}}
                    onPress={() => handleStatusChange(i)}
                  >
                    {item.title}
                  </Text>
                  <IconButton
                    size="sm"
                    colorScheme="trueGray"
                    icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />}
                    onPress={() => handleDelete(i)}
                  />
                </HStack>
              ))}
            </VStack>
          </Box>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


