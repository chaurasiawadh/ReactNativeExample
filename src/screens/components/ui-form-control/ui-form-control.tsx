import {FormControl, Input, WarningOutlineIcon, VStack} from 'native-base';
import React, {useState} from 'react';

import {DemoWrapper} from '../../../components/demo-wrapper';

export const FormControlDemoScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const isInvalid = email.length > 0 && !email.includes('@');

  return (
    <DemoWrapper
      description="Labels, helper text, and validation states."
      code={`<VStack space={4}>
  <FormControl>
    <FormControl.Label>Email</FormControl.Label>
    <Input placeholder="name@example.com" />
    <FormControl.HelperText>We'll never share your email.</FormControl.HelperText>
  </FormControl>
  <FormControl isInvalid={isInvalid}>
    <FormControl.Label>Validate Email</FormControl.Label>
    <Input value={email} onChangeText={setEmail} placeholder="type and include @" />
    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
      Invalid email address
    </FormControl.ErrorMessage>
  </FormControl>
</VStack>`}
      defaultShowCode
    >
      <VStack space={4}>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="name@example.com" />
          <FormControl.HelperText>
            We’ll never share your email.
          </FormControl.HelperText>
        </FormControl>
        <FormControl isInvalid={isInvalid}>
          <FormControl.Label>Validate Email</FormControl.Label>
          <Input value={email} onChangeText={setEmail} placeholder="type and include @" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Invalid email address
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
    </DemoWrapper>
  );
};


