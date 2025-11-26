import React from 'react';
import {AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text, VStack} from 'native-base';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

export const CardDemoScreen: React.FC = () => {
  const previewCode = `<Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
  <Box>
    <AspectRatio w="100%" ratio={16 / 9}>
      <Image source={{ uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg' }} alt="image" />
    </AspectRatio>
    <Center bg="violet.500" _text={{
      color: 'warmGray.50', fontWeight: '700', fontSize: 'xs'
    }} position="absolute" bottom="0" px="3" py="1.5">
      PHOTOS
    </Center>
  </Box>
  <Stack p="4" space={3}>
    <Stack space={2}>
      <Heading size="md">The Garden City</Heading>
      <Text fontSize="xs" color="violet.500" fontWeight="500">The Silicon Valley of India.</Text>
    </Stack>
    <Text>Bengaluru is the center of India's high-tech industry.</Text>
    <HStack alignItems="center" justifyContent="space-between">
      <Text color="coolGray.600" fontWeight="400">6 mins ago</Text>
    </HStack>
  </Stack>
</Box>`;

  return (
    <DemoWrapper description="A flexible content container presenting media with supporting text.">
      <VStack space={6}>
        <ComponentPreview>
          <Box alignItems="center">
            <Box
              maxW="80"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{borderColor: 'coolGray.600', backgroundColor: 'gray.700'}}
              _light={{backgroundColor: 'gray.50'}}
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                    }}
                    alt="image"
                  />
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{bg: 'violet.400'}}
                  _text={{color: 'warmGray.50', fontWeight: '700', fontSize: 'xs'}}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5"
                >
                  PHOTOS
                </Center>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md">The Garden City</Heading>
                  <Text fontSize="xs" _light={{color: 'violet.500'}} _dark={{color: 'violet.400'}} fontWeight="500">
                    The Silicon Valley of India.
                  </Text>
                </Stack>
                <Text>
                  Bengaluru (also called Bangalore) is the center of India&apos;s high-tech industry. The city is also known
                  for its parks and nightlife.
                </Text>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text color="coolGray.600" _dark={{color: 'warmGray.200'}} fontWeight="400">
                    6 mins ago
                  </Text>
                </HStack>
              </Stack>
            </Box>
          </Box>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


