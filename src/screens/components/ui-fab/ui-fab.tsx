import {Fab, Icon, Center, Box} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const FabDemoScreen: React.FC = () => {
  const exampleCode = `<Center>
  <Box
    height="200"
    w={[200, 300, 400]}
    shadow="2"
    rounded="lg"
    _dark={{ bg: 'coolGray.200:alpha.20' }}
    _light={{ bg: 'coolGray.200:alpha.20' }}
  >
    {/* Top: Quick Start (Placement) */}
    <Fab
      renderInPortal={false}
      shadow={2}
      placement="top-right"
      size="sm"
      icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />}
      label="Quick Start"
    />

    {/* Center-ish: Custom Position with Next icon */}
    <Fab
      renderInPortal={false}
      shadow={2}
      right={70}
      bottom={80}
      size="sm"
      icon={<Icon color="white" as={MaterialIcons} name="navigate-next" size="4" />}
    />

    {/* Bottom right: Basic */}
    <Fab
      renderInPortal={false}
      shadow={2}
      size="sm"
      icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
    />
  </Box>
</Center>`;
  return (
    <DemoWrapper description="Floating action button." code={exampleCode} defaultShowCode>
      <Center>
        <Box
          height="200"
          w={[200, 300, 400]}
          shadow="2"
          rounded="lg"
          _dark={{bg: 'coolGray.200:alpha.20'}}
          _light={{bg: 'coolGray.200:alpha.20'}}
        >
          {/* Top: Quick Start (Placement) */}
          <Fab
            renderInPortal={false}
            shadow={2}
            placement="top-right"
            size="sm"
            icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />}
            label="Quick Start"
          />

          {/* Center-ish: Custom Position with Next icon */}
          <Fab
            renderInPortal={false}
            shadow={2}
            right={70}
            bottom={80}
            size="sm"
            icon={<Icon color="white" as={MaterialIcons} name="navigate-next" size="4" />}
          />

          {/* Bottom right: Basic */}
          <Fab
            renderInPortal={false}
            shadow={2}
            size="sm"
            icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
          />
        </Box>
      </Center>
    </DemoWrapper>
  );
};


