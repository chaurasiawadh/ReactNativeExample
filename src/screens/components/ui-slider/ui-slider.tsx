import {VStack, Slider, Text, HStack} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const SliderDemoScreen: React.FC = () => {
  const [value, setValue] = useState(50);
  const exampleCode = `<VStack space={4}>
  <VStack space={2}>
    <Text>Value: {value}</Text>
    <Slider value={value} onChange={setValue} minValue={0} maxValue={100}>
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
  </VStack>
  <HStack space={4}>
    <Slider colorScheme="secondary" defaultValue={30}>
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
  </HStack>
</VStack>`;
  return (
    <DemoWrapper description="Continuous and step sliders with color schemes." code={exampleCode} defaultShowCode>
      <VStack space={4}>
        <VStack space={2}>
          <Text>Value: {value}</Text>
          <Slider value={value} onChange={setValue} minValue={0} maxValue={100}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </VStack>
        <HStack space={4}>
          <Slider colorScheme="secondary" defaultValue={30}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </HStack>
      </VStack>
    </DemoWrapper>
  );
};


