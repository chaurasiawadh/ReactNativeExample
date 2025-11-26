import React from 'react';
import {Box, Center, HStack, Icon, Pressable, Text, VStack} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

export const FooterDemoScreen: React.FC = () => {
  const [selected, setSelected] = React.useState<number>(1);

  const previewCode = `const [selected, setSelected] = React.useState(1);
<HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
  <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
    <Center>
      <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
      <Text color="white" fontSize="12">Home</Text>
    </Center>
  </Pressable>
  <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
    <Center>
      <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
      <Text color="white" fontSize="12">Search</Text>
    </Center>
  </Pressable>
  <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
    <Center>
      <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
      <Text color="white" fontSize="12">Cart</Text>
    </Center>
  </Pressable>
  <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
    <Center>
      <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
      <Text color="white" fontSize="12">Account</Text>
    </Center>
  </Pressable>
</HStack>`;

  return (
    <DemoWrapper description="A simple footer tab bar built with HStack and Pressable.">
      <VStack space={6}>
        <ComponentPreview>
          <Box flex={1} bg="white" _dark={{bg: 'gray.900'}} width="100%" maxW="400px" alignSelf="center">
            <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
              <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                <Center>
                  <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
                  <Text color="white" fontSize="12">Home</Text>
                </Center>
              </Pressable>
              <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
                <Center>
                  <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
                  <Text color="white" fontSize="12">Search</Text>
                </Center>
              </Pressable>
              <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
                <Center>
                  <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
                  <Text color="white" fontSize="12">Cart</Text>
                </Center>
              </Pressable>
              <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
                <Center>
                  <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
                  <Text color="white" fontSize="12">Account</Text>
                </Center>
              </Pressable>
            </HStack>
          </Box>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


