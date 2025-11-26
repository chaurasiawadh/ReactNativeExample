import type {ParamListBase} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
  useTheme,
  CheckIcon,
} from 'native-base';
import React from 'react';
import {Linking} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ROUTES} from '../../constants/routes';

type Props = NativeStackScreenProps<ParamListBase>;

export const IntroScreen: React.FC<Props> = ({navigation}) => {
  const theme = useTheme();

  const handleOpenDocs = (): void => {
    void Linking.openURL('https://docs.nativebase.io/');
  };

  return (
    <ScrollView>
      <VStack space={6} px="5" pt="6" pb="10">
        <VStack space={2}>
          <Heading size="xl">NativeBase Component Explorer</Heading>
          <Text color="muted.500">
            Learn, Explore &amp; Play with Every NativeBase Component
          </Text>
        </VStack>

        <Text color="muted.600">
          This app is designed to demonstrate all NativeBase UI components with
          live examples, code previews, and an interactive playground. Explore
          how each component works and customize it in real time.
        </Text>

        <HStack space={3} flexWrap="wrap">
          <Button
            leftIcon={<Icon as={MaterialCommunityIcons} name="view-grid-plus" />}
            onPress={() => navigation.navigate(ROUTES.COMPONENTS as never)}
          >
            Start Exploring Components
          </Button>
          <Button
            variant="outline"
            colorScheme="secondary"
            leftIcon={<Icon as={MaterialCommunityIcons} name="book-open-page-variant" />}
            onPress={handleOpenDocs}
          >
            View Documentation
          </Button>
        </HStack>

        <Box
          borderWidth="1"
          borderColor="muted.200"
          bg={theme.colors.gray?.[50] ?? 'muted.50'}
          _dark={{bg: 'gray.800', borderColor: 'muted.700'}}
          rounded="lg"
          p="4"
        >
          <VStack space={3}>
            <Heading size="sm">Highlights</Heading>
            <VStack space={2}>
              <HStack space={2} alignItems="center">
                <CheckIcon color="emerald.500" />
                <Text>Preview of all components</Text>
              </HStack>
              <HStack space={2} alignItems="center">
                <CheckIcon color="emerald.500" />
                <Text>Copyable code snippets</Text>
              </HStack>
              <HStack space={2} alignItems="center">
                <CheckIcon color="emerald.500" />
                <Text>Interactive playground</Text>
              </HStack>
              <HStack space={2} alignItems="center">
                <CheckIcon color="emerald.500" />
                <Text>Theme support</Text>
              </HStack>
              <HStack space={2} alignItems="center">
                <CheckIcon color="emerald.500" />
                <Text>Real-world examples</Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        <Box
          borderWidth="1"
          borderColor="muted.200"
          rounded="lg"
          p="4"
          _dark={{borderColor: 'muted.700'}}
        >
          <HStack alignItems="center" space={3}>
            <Icon as={MaterialCommunityIcons} name="information-outline" size="lg" color="primary.500" />
            <Text flex={1} color="muted.600">
              Tip: Toggle the theme from the drawer to see components adapt to
              light and dark modes.
            </Text>
          </HStack>
        </Box>
      </VStack>
    </ScrollView>
  );
};


