import { Box, HStack, Icon, Pressable, Text, VStack, useColorMode } from 'native-base';
import React from 'react';
import { SectionList, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { getItemIconName } from './get-item-icon';
import type { ComponentSection, ComponentItem } from '../../data/components';
import { SectionHeader } from '../section-header';

type Variant = 'screen' | 'drawer';

interface ComponentListProps {
  sections: ComponentSection[];
  onItemPress: (route: string) => void;
  variant?: Variant;
}

export const ComponentList: React.FC<ComponentListProps> = ({
  sections,
  onItemPress,
  variant = 'screen',
}) => {
  const { colorMode } = useColorMode();
  const pressedBg = colorMode === 'dark' ? 'muted.800' : 'muted.100';

  if (variant === 'drawer') {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3} pb={8}>
          {sections.map(section => (
            <VStack key={section.title} space={1}>
              <Text color="muted.500" fontSize="xs">{section.title}</Text>
              {section.data.map(item => (
                <Pressable key={item.route} onPress={() => onItemPress(item.route)}>
                  {({ isPressed }) => (
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      py={2.5}
                      px={1}
                      bg={isPressed ? pressedBg : 'transparent'}
                    >
                      <HStack space={3} alignItems="center">
                        <Icon as={MaterialCommunityIcons} name={getItemIconName(item.name)} size="sm" color="primary.500" />
                        <Text fontSize="sm">{item.title}</Text>
                      </HStack>
                      <Icon as={MaterialCommunityIcons} name="chevron-right" />
                    </HStack>
                  )}
                </Pressable>
              ))}
            </VStack>
          ))}
        </VStack>
      </ScrollView>
    );
  }

  const renderItem = ({ item }: { item: ComponentItem }): JSX.Element => (
    <Pressable onPress={() => onItemPress(item.route)} accessibilityRole="button">
      {({ isPressed }) => (
        <Box
          px="4"
          py="4"
          bg={isPressed ? pressedBg : 'transparent'}
          borderBottomWidth="1"
          borderColor="muted.200"
        >
          <HStack alignItems="center" justifyContent="space-between" minH={14}>
            <HStack alignItems="center" space={3}>
              <Icon as={MaterialCommunityIcons} name={getItemIconName(item.name)} size="md" color="primary.500" />
              <Text>{item.title}</Text>
            </HStack>
            <Icon as={MaterialCommunityIcons} name="chevron-right" />
          </HStack>
        </Box>
      )}
    </Pressable>
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.route}
      renderItem={renderItem}
      renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
    />
  );
};


