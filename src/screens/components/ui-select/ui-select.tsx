import {Select, CheckIcon, VStack} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const SelectDemoScreen: React.FC = () => {
  const [service, setService] = useState('');
  const exampleCode = `<VStack space={4}>
  <Select
    selectedValue={service}
    minWidth="200"
    placeholder="Choose Service"
    onValueChange={setService}
    _selectedItem={{bg: 'primary.100', endIcon: <CheckIcon size="5" />}}
  >
    <Select.Item label="UX Research" value="ux" />
    <Select.Item label="UI Design" value="ui" />
    <Select.Item label="Frontend Dev" value="fe" />
    <Select.Item label="Backend Dev" value="be" />
  </Select>
  <Select variant="filled" placeholder="Filled variant">
    <Select.Item label="Option A" value="a" />
    <Select.Item label="Option B" value="b" />
  </Select>
</VStack>`;
  return (
    <DemoWrapper description="Dropdown select with variants and icons." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <Select
          selectedValue={service}
          minWidth="200"
          placeholder="Choose Service"
          onValueChange={setService}
          _selectedItem={{bg: 'primary.100', endIcon: <CheckIcon size="5" />}}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="UI Design" value="ui" />
          <Select.Item label="Frontend Dev" value="fe" />
          <Select.Item label="Backend Dev" value="be" />
        </Select>
        <Select variant="filled" placeholder="Filled variant">
          <Select.Item label="Option A" value="a" />
          <Select.Item label="Option B" value="b" />
        </Select>
      </VStack>
    </DemoWrapper>
  );
};


