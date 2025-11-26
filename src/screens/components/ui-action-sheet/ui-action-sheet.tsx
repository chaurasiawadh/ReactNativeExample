import { Actionsheet, Box, Button } from 'native-base';
import React, { useState } from 'react';

import { DemoWrapper } from '../../../components/demo-wrapper';

export const ActionSheetDemoScreen: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <DemoWrapper
      description="Bottom sheet with action options."
      code={`<Button onPress={() => setOpen(true)}>Open ActionSheet</Button>
<Actionsheet isOpen={open} onClose={() => setOpen(false)}>
  <Actionsheet.Content>
    <Box w="100%">
      <Actionsheet.Item onPress={() => setOpen(false)}>Share</Actionsheet.Item>
      <Actionsheet.Item onPress={() => setOpen(false)}>Move</Actionsheet.Item>
      <Actionsheet.Item onPress={() => setOpen(false)}>Rename</Actionsheet.Item>
      <Actionsheet.Item onPress={() => setOpen(false)} _text={{color: 'error.600'}}>
        Delete
      </Actionsheet.Item>
      <Actionsheet.Item onPress={() => setOpen(false)} _text={{color: 'muted.500'}}>
        Cancel
      </Actionsheet.Item>
    </Box>
  </Actionsheet.Content>
</Actionsheet>`}
      defaultShowCode
    >
      <Button onPress={() => setOpen(true)}>Open ActionSheet</Button>
      <Actionsheet isOpen={open} onClose={() => setOpen(false)}>
        <Actionsheet.Content>
          <Box w="100%">
            <Actionsheet.Item onPress={() => setOpen(false)}>Share</Actionsheet.Item>
            <Actionsheet.Item onPress={() => setOpen(false)}>Move</Actionsheet.Item>
            <Actionsheet.Item onPress={() => setOpen(false)}>Rename</Actionsheet.Item>
            <Actionsheet.Item onPress={() => setOpen(false)} _text={{ color: 'error.600' }}>
              Delete
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => setOpen(false)} _text={{ color: 'muted.500' }}>
              Cancel
            </Actionsheet.Item>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </DemoWrapper>
  );
};


