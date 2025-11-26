import {Radio, VStack} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const RadioDemoScreen: React.FC = () => {
  const [value, setValue] = useState('one');
  const exampleCode = `<VStack space={4}>
  <Radio.Group name="example" value={value} onChange={setValue}>
    <Radio value="one" my="1">First</Radio>
    <Radio value="two" my="1">Second</Radio>
  </Radio.Group>
  <VStack space={2}>
    <Radio.Group name="sizes" defaultValue="sm">
      <Radio value="sm" size="sm" my="1">Small</Radio>
      <Radio value="md" size="md" my="1">Medium</Radio>
      <Radio value="lg" size="lg" my="1">Large</Radio>
    </Radio.Group>
  </VStack>
</VStack>`;
  return (
    <DemoWrapper description="Radio group with controlled value and sizes." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <Radio.Group name="example" value={value} onChange={setValue}>
          <Radio value="one" my="1">
            First
          </Radio>
          <Radio value="two" my="1">
            Second
          </Radio>
        </Radio.Group>
        <VStack space={2}>
          <Radio.Group name="sizes" defaultValue="sm">
            <Radio value="sm" size="sm" my="1">Small</Radio>
            <Radio value="md" size="md" my="1">Medium</Radio>
            <Radio value="lg" size="lg" my="1">Large</Radio>
          </Radio.Group>
        </VStack>
      </VStack>
    </DemoWrapper>
  );
};


