import React from 'react';
import {Button, FormControl, Input, Text, VStack} from 'native-base';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

type FormState = {
  name: string;
  email: string;
};

export const FormWithValidationDemoScreen: React.FC = () => {
  const [form, setForm] = React.useState<FormState>({name: '', email: ''});
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const validate = React.useCallback((values: FormState) => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) {
      nextErrors.name = 'Name is required';
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email';
    }
    return nextErrors;
  }, []);

  const handleSubmit = React.useCallback(() => {
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  }, [form, validate]);

  const previewCode = `<FormControl isRequired isInvalid={'name' in errors}>
  <FormControl.Label>Name</FormControl.Label>
  <Input value={form.name} onChangeText={(t) => setForm({ ...form, name: t })} />
  <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
</FormControl>
<FormControl mt="3" isRequired isInvalid={'email' in errors}>
  <FormControl.Label>Email</FormControl.Label>
  <Input keyboardType="email-address" value={form.email} onChangeText={(t) => setForm({ ...form, email: t })} />
  <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
</FormControl>
<Button mt="4" onPress={handleSubmit}>Submit</Button>`;

  return (
    <DemoWrapper description="Form with simple client-side validation using NativeBase FormControl.">
      <VStack space={6}>
        <ComponentPreview>
          <VStack space={4} w="100%">
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={form.name}
                onChangeText={t => setForm(prev => ({...prev, name: t}))}
                placeholder="Enter your name"
              />
              {'name' in errors ? <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> : null}
            </FormControl>
            <FormControl isRequired isInvalid={'email' in errors}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                keyboardType="email-address"
                value={form.email}
                onChangeText={t => setForm(prev => ({...prev, email: t}))}
                placeholder="you@example.com"
                autoCapitalize="none"
              />
              {'email' in errors ? <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> : null}
            </FormControl>
            <Button onPress={handleSubmit}>Submit</Button>
            {submitted ? <Text color="emerald.500">Submitted!</Text> : null}
          </VStack>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


