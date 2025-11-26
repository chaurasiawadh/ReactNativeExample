import {Heading} from 'native-base';
import React from 'react';
import {View} from 'react-native';

import {sectionHeaderStyles} from './section-header.styles';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({title}) => {
  return (
    <View style={sectionHeaderStyles.container}>
      <Heading size="sm" color="muted.500">
        {title}
      </Heading>
    </View>
  );
};


