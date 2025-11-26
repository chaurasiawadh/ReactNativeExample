import React from 'react';
import {Button, FormControl, HStack, Input, Pressable, Text, VStack} from 'native-base';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

type AuthForm = {
  email: string;
  password: string;
  confirm?: string;
};

export const LoginSignupFormsDemoScreen: React.FC = () => {
  const [mode, setMode] = React.useState<'login' | 'signup'>('login');
  const [form, setForm] = React.useState<AuthForm>({email: '', password: '', confirm: ''});
  const [errors, setErrors] = React.useState<Partial<Record<keyof AuthForm, string>>>({});

  const validate = React.useCallback((values: AuthForm) => {
    const next: Partial<Record<keyof AuthForm, string>> = {};
    if (!values.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Enter a valid email';
    }
    if (!values.password) {
      next.password = 'Password is required';
    } else if (values.password.length < 6) {
      next.password = 'At least 6 characters';
    }
    if (mode === 'signup') {
      if (!values.confirm) {
        next.confirm = 'Confirm your password';
      } else if (values.confirm !== values.password) {
        next.confirm = 'Passwords do not match';
      }
    }
    return next;
  }, [mode]);

  const handleSubmit = React.useCallback(() => {
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Success state (no backend integration)
    }
  }, [form, validate]);

  const previewCode = `// Toggle between Login and Signup forms
const [mode, setMode] = React.useState<'login' | 'signup'>('login');
<HStack space={4} justifyContent="center" mb="4">
  <Pressable onPress={() => setMode('login')}><Text bold={mode==='login'}>Login</Text></Pressable>
  <Pressable onPress={() => setMode('signup')}><Text bold={mode==='signup'}>Sign Up</Text></Pressable>
</HStack>
{/* Render corresponding form fields */}`;

  return (
    <DemoWrapper description="Login and Signup forms with basic client-side validation.">
      <VStack space={6}>
        <ComponentPreview>
          <VStack space={4} w="100%">
            <HStack space={6} justifyContent="center" mb="2">
              <Pressable onPress={() => setMode('login')}>
                <Text bold={mode === 'login'} fontSize="md" color={mode === 'login' ? 'primary.600' : undefined}>
                  Login
                </Text>
              </Pressable>
              <Pressable onPress={() => setMode('signup')}>
                <Text bold={mode === 'signup'} fontSize="md" color={mode === 'signup' ? 'primary.600' : undefined}>
                  Sign Up
                </Text>
              </Pressable>
            </HStack>
            <FormControl isRequired isInvalid={'email' in errors}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                keyboardType="email-address"
                value={form.email}
                onChangeText={t => setForm(prev => ({...prev, email: t}))}
                autoCapitalize="none"
                placeholder="you@example.com"
              />
              {'email' in errors ? <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> : null}
            </FormControl>
            <FormControl isRequired isInvalid={'password' in errors}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                value={form.password}
                onChangeText={t => setForm(prev => ({...prev, password: t}))}
                placeholder="••••••"
                secureTextEntry
              />
              {'password' in errors ? <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage> : null}
            </FormControl>
            {mode === 'signup' ? (
              <FormControl isRequired isInvalid={'confirm' in errors}>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  value={form.confirm}
                  onChangeText={t => setForm(prev => ({...prev, confirm: t}))}
                  placeholder="••••••"
                  secureTextEntry
                />
                {'confirm' in errors ? <FormControl.ErrorMessage>{errors.confirm}</FormControl.ErrorMessage> : null}
              </FormControl>
            ) : null}
            <Button mt="2" onPress={handleSubmit}>
              {mode === 'login' ? 'Login' : 'Create Account'}
            </Button>
          </VStack>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


