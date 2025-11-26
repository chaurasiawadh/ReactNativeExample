import {HStack, VStack, Button, Icon, Text, Select, Switch, FormControl} from 'native-base';
import React, {useMemo, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';

export const ButtonDemoScreen: React.FC = () => {
  const previewCode = `<VStack space={4}>
  <HStack space={3} justifyContent="space-between">
    <Button>Primary</Button>
    <Button variant="subtle">Subtle</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </HStack>
  <HStack space={3} justifyContent="space-between">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </HStack>
  <HStack space={3} justifyContent="space-between">
    <Button isLoading>Loading</Button>
    <Button isDisabled>Disabled</Button>
    <Button leftIcon={<Icon as={MaterialCommunityIcons} name="plus" />}>With Icon</Button>
  </HStack>
  <HStack space={3} justifyContent="space-between">
    <Button colorScheme="secondary">Secondary</Button>
    <Button colorScheme="secondary" variant="outline">Secondary Outline</Button>
  </HStack>
</VStack>`;

  // Playground state
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [variant, setVariant] = useState<'solid' | 'subtle' | 'outline' | 'ghost'>('solid');
  const [colorScheme, setColorScheme] = useState<string>('primary');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generatedSnippet = useMemo(
    () =>
      `<Button size="${size}" variant="${variant}" colorScheme="${colorScheme}"${isDisabled ? ' isDisabled' : ''}${
        isLoading ? ' isLoading' : ''
      }>Action</Button>`,
    [size, variant, colorScheme, isDisabled, isLoading],
  );

  return (
    <DemoWrapper description="A button triggers an action when pressed. It supports different variants, sizes and states.">
      <VStack space={6}>
        <ComponentPreview>
          <VStack space={4}>
            <HStack space={3} justifyContent="space-between">
              <Button>Primary</Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </HStack>
            <HStack space={3} justifyContent="space-between">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </HStack>
            <HStack space={3} justifyContent="space-between">
              <Button isLoading>Loading</Button>
              <Button isDisabled>Disabled</Button>
              <Button leftIcon={<Icon as={MaterialCommunityIcons} name="plus" />}>With Icon</Button>
            </HStack>
            <HStack space={3} justifyContent="space-between">
              <Button colorScheme="secondary">Secondary</Button>
              <Button colorScheme="secondary" variant="outline">Secondary Outline</Button>
            </HStack>
          </VStack>
        </ComponentPreview>

        <Text color="muted.500">
          Use buttons to initiate actions: submit forms, start flows, or trigger dialogs. Keep labels concise and use
          variant and colorScheme to communicate emphasis.
        </Text>

        <CodeBlockWithCopy code={previewCode} />

        <VStack space={3}>
          <Text bold>Playground</Text>
          <VStack space={3}>
            <FormControl>
              <FormControl.Label>Size</FormControl.Label>
              <Select selectedValue={size} onValueChange={(v: 'sm' | 'md' | 'lg') => setSize(v)} minW="200">
                <Select.Item label="sm" value="sm" />
                <Select.Item label="md" value="md" />
                <Select.Item label="lg" value="lg" />
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label>Variant</FormControl.Label>
              <Select
                selectedValue={variant}
                onValueChange={(v: 'solid' | 'subtle' | 'outline' | 'ghost') => setVariant(v)}
                minW="200"
              >
                <Select.Item label="solid" value="solid" />
                <Select.Item label="subtle" value="subtle" />
                <Select.Item label="outline" value="outline" />
                <Select.Item label="ghost" value="ghost" />
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label>Color Scheme</FormControl.Label>
              <Select selectedValue={colorScheme} onValueChange={v => setColorScheme(v)} minW="200">
                <Select.Item label="primary" value="primary" />
                <Select.Item label="secondary" value="secondary" />
                <Select.Item label="emerald" value="emerald" />
                <Select.Item label="rose" value="rose" />
                <Select.Item label="amber" value="amber" />
              </Select>
            </FormControl>
            <HStack alignItems="center" space={6}>
              <HStack alignItems="center" space={2}>
                <Text>Disabled</Text>
                <Switch isChecked={isDisabled} onToggle={() => setIsDisabled(v => !v)} />
              </HStack>
              <HStack alignItems="center" space={2}>
                <Text>Loading</Text>
                <Switch isChecked={isLoading} onToggle={() => setIsLoading(v => !v)} />
              </HStack>
            </HStack>
            <HStack space={3}>
              <Button
                size={size}
                variant={variant}
                colorScheme={colorScheme}
                isDisabled={isDisabled}
                isLoading={isLoading}
              >
                Action
              </Button>
            </HStack>
            <CodeBlockWithCopy label="Generated props" code={generatedSnippet} />
          </VStack>
        </VStack>
      </VStack>
    </DemoWrapper>
  );
};


