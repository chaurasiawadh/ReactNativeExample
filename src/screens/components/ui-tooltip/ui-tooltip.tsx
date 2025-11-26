import { Tooltip, Button, VStack, Select, CheckIcon } from 'native-base';
import React, { useState } from 'react';

import { DemoWrapper } from '../../../components/demo-wrapper';

export const TooltipDemoScreen: React.FC = () => {
  type Placement =
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'right top'
    | 'right bottom'
    | 'left top'
    | 'left bottom';

  const [position, setPosition] = useState<Placement>('top left');
  const handleChangePosition = (nextValue: string): void => {
    setPosition(nextValue as Placement);
  };

  return (
    <DemoWrapper
      description="Hover or press tooltips for extra information."
      code={`<VStack space={6} alignSelf="flex-start" w="100%">
  {/* @ts-ignore */}
  <Tooltip label={position} placement={position} closeOnClick={false}>
    <Button alignSelf="center">ToolTip</Button>
  </Tooltip>

  <Select
    selectedValue={position}
    accessibilityLabel="Select a position for Tooltip"
    onValueChange={nextValue => setPosition(nextValue)}
    _selectedItem={{ bg: 'cyan.600', endIcon: <CheckIcon size={4} /> }}
  >
    <Select.Item label="Top Left" value="top left" />
    <Select.Item label="Top" value="top" />
    <Select.Item label="Top Right" value="top right" />
    <Select.Item label="Right Top" value="right top" />
    <Select.Item label="Right" value="right" />
    <Select.Item label="Right Bottom" value="right bottom" />
    <Select.Item label="Bottom Left" value="bottom left" />
    <Select.Item label="Bottom" value="bottom" />
    <Select.Item label="Bottom Right" value="bottom right" />
    <Select.Item label="Left Top" value="left top" />
    <Select.Item label="Left" value="left" />
    <Select.Item label="Left Bottom" value="left bottom" />
  </Select>
</VStack>`}
      defaultShowCode
    >
      <VStack space={6} alignSelf="flex-start" w="100%">
        <Tooltip label={position} placement={position} closeOnClick={false}>
          <Button alignSelf="center">ToolTip</Button>
        </Tooltip>

        <Select
          selectedValue={position}
          accessibilityLabel="Select a position for Tooltip"
          onValueChange={handleChangePosition}
          _selectedItem={{ bg: 'cyan.600', endIcon: <CheckIcon size={4} /> }}
        >
          <Select.Item label="Top Left" value="top left" />
          <Select.Item label="Top" value="top" />
          <Select.Item label="Top Right" value="top right" />
          <Select.Item label="Right Top" value="right top" />
          <Select.Item label="Right" value="right" />
          <Select.Item label="Right Bottom" value="right bottom" />
          <Select.Item label="Bottom Left" value="bottom left" />
          <Select.Item label="Bottom" value="bottom" />
          <Select.Item label="Bottom Right" value="bottom right" />
          <Select.Item label="Left Top" value="left top" />
          <Select.Item label="Left" value="left" />
          <Select.Item label="Left Bottom" value="left bottom" />
        </Select>
      </VStack>
    </DemoWrapper>
  );
};


