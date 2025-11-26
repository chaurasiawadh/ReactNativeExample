import type {ParamListBase} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Input, VStack} from 'native-base';
import React, {useMemo, useState} from 'react';

import {homeStyles} from './home.styles';
import {ComponentList} from '../../components/component-list';
import {COMPONENT_SECTIONS} from '../../data/components';

type Props = NativeStackScreenProps<ParamListBase>;

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    if (!query.trim()) {return COMPONENT_SECTIONS;}
    const q = query.toLowerCase();
    return COMPONENT_SECTIONS.map(sec => ({
      ...sec,
      data: sec.data.filter(item => item.name.toLowerCase().includes(q)),
    })).filter(sec => sec.data.length > 0);
  }, [query]);

  return (
    <VStack style={homeStyles.container} space={3}>
      <Box px="4" pt="3">
        <Input
          placeholder="Search components..."
          value={query}
          onChangeText={setQuery}
          // Note: left icon removed to avoid importing icon pack here; keep field clean
          variant="filled"
        />
      </Box>
      <ComponentList
        sections={sections}
        onItemPress={(route) => navigation.navigate(route)}
        variant="screen"
      />
    </VStack>
  );
};


