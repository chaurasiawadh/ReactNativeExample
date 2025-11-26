import { Menu, Pressable, HamburgerIcon, Box } from 'native-base';
import React from 'react';

import { DemoWrapper } from '../../../components/demo-wrapper';

export const MenuDemoScreen: React.FC = () => {
  return (
    <DemoWrapper
      description="Context menus with selectable items."
      code={`<Menu
  w="190"
  trigger={triggerProps => (
    <Pressable accessibilityLabel="More options" {...triggerProps}>
      <HamburgerIcon />
    </Pressable>
  )}
>
  <Menu.Item>Share</Menu.Item>
  <Menu.Item>Move</Menu.Item>
  <Menu.Item>Rename</Menu.Item>
  <Menu.Item _text={{color: 'error.600'}}>Delete</Menu.Item>
</Menu>`}
      defaultShowCode
    >
      <Box>
        <Menu
          w="190"
          trigger={triggerProps => {
            return (
              <Pressable accessibilityLabel="More options" {...triggerProps}>
                <HamburgerIcon />
              </Pressable>
            );
          }}
        >
          <Menu.Item>Share</Menu.Item>
          <Menu.Item>Move</Menu.Item>
          <Menu.Item>Rename</Menu.Item>
          <Menu.Item _text={{ color: 'error.600' }}>Delete</Menu.Item>
        </Menu>
      </Box>
    </DemoWrapper>
  );
};


