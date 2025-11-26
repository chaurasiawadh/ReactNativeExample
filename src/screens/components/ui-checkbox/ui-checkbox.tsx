import {VStack, Checkbox, HStack, Text} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const CheckboxDemoScreen: React.FC = () => {
  const [values, setValues] = useState<string[]>(['react']);
  const exampleCode = `<VStack space={4}>
  <Checkbox value="single" isChecked>Single checked</Checkbox>
  <Checkbox value="disabled" isDisabled>Disabled</Checkbox>
  <VStack>
    <Text bold mb="2">Checkbox Group</Text>
    <Checkbox.Group value={values} onChange={setValues} accessibilityLabel="tech stack">
      <HStack space={4}>
        <Checkbox value="react">React</Checkbox>
        <Checkbox value="native">React Native</Checkbox>
        <Checkbox value="ts">TypeScript</Checkbox>
      </HStack>
    </Checkbox.Group>
  </VStack>
</VStack>`;
  return (
    <DemoWrapper description="Group and individual checkbox with color schemes." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <Checkbox value="single" isChecked>Single checked</Checkbox>
        <Checkbox value="disabled" isDisabled>Disabled</Checkbox>
        <VStack>
          <Text bold mb="2">Checkbox Group</Text>
          <Checkbox.Group value={values} onChange={setValues} accessibilityLabel="tech stack">
            <HStack space={4}>
              <Checkbox value="react">React</Checkbox>
              <Checkbox value="native">React Native</Checkbox>
              <Checkbox value="ts">TypeScript</Checkbox>
            </HStack>
          </Checkbox.Group>
        </VStack>
      </VStack>
    </DemoWrapper>
  );
};


