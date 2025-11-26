import React from 'react';
import {Box, FlatList, Icon, IconButton, VStack} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ComponentPreview} from '../../../components/component-preview';
import {DemoWrapper} from '../../../components/demo-wrapper';
import {CodeBlockWithCopy} from '../../../components/code-block-with-copy';

type AppDrawerIcon = { name: string; bg: string };

export const AppDrawerDemoScreen: React.FC = () => {
  const icons = React.useMemo<AppDrawerIcon[]>(
    () => [
      {name: 'bolt', bg: 'amber.600'},
      {name: 'build', bg: 'emerald.600'},
      {name: 'cloud', bg: 'blue.600'},
      {name: 'delivery-dining', bg: 'orange.600'},
      {name: 'favorite', bg: 'rose.600'},
      {name: 'music-note', bg: 'violet.600'},
      {name: 'invert-colors-on', bg: 'lime.600'},
      {name: 'navigation', bg: 'indigo.600'},
      {name: 'settings', bg: 'pink.600'},
      {name: 'sports-esports', bg: 'coolGray.600'},
      {name: 'shield', bg: 'darkBlue.600'},
      {name: 'photo-camera', bg: 'fuchsia.600'},
      {name: 'network-wifi', bg: 'amber.500'},
      {name: 'nightlight-round', bg: 'violet.800'},
      {name: 'flight', bg: 'blue.800'},
      {name: 'extension', bg: 'indigo.600'},
      {name: 'duo', bg: 'orange.600'},
      {name: 'album', bg: 'rose.600'},
      {name: 'access-alarm', bg: 'emerald.600'},
      {name: 'forum', bg: 'indigo.600'},
    ],
    [],
  );

  const previewCode = `<FlatList
  numColumns={4}
  data={icons}
  renderItem={({ item }) => (
    <IconButton
      m="8px"
      borderRadius="full"
      bg={item.bg}
      variant="solid"
      p="3"
      icon={<Icon color="white" name={item.name} as={MaterialIcons} size="sm" />}
    />
  )}
/>`;

  return (
    <DemoWrapper description="An app-drawer style grid using FlatList and IconButtons.">
      <VStack space={6}>
        <ComponentPreview>
          <Box alignItems="center" w="100%">
            <FlatList
              numColumns={4}
              m="-8px"
              data={icons}
              keyExtractor={(i, idx) => `${i.name}-${idx}`}
              renderItem={({item}) => (
                <IconButton
                  m="8px"
                  borderRadius="full"
                  bg={item.bg}
                  variant="solid"
                  p="3"
                  icon={<Icon color="white" name={item.name} as={MaterialIcons} size="sm" />}
                />
              )}
            />
          </Box>
        </ComponentPreview>
        <CodeBlockWithCopy label="Code" code={previewCode} />
      </VStack>
    </DemoWrapper>
  );
};


