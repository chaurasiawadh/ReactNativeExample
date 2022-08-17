import React from 'react';
import {Text, View, Alert, StyleSheet, SectionList} from 'react-native';
import colors from '../assets/color';

const CITY = [
  {
    title: 'City Name Starts with A',
    data: ['Agra', 'Allahabad', 'Amritsar'],
  },
  {
    title: 'City Name Starts with B',
    data: ['Barabanki', 'Bombay', 'Bangalore'],
  },
  {
    title: 'City Name Starts with C',
    data: ['Chakia', 'Chandauli', 'Chennai'],
  },
];
export const SectionLists = () => {
  const getSectionListItem = item => {
    Alert.alert(item);
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={CITY}
        renderSectionHeader={({section}) => (
          <Text style={styles.SectionHeader}> {section.title} </Text>
        )}
        renderItem={({item}) => (
          <Text
            style={styles.SectionListItemS}
            onPress={()=>getSectionListItem(item)}>
            {item}
          </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionHeader: {
    backgroundColor: colors.primary,
    fontSize: 20,
    marginTop: 10,
    padding: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  SectionListItemS: {
    fontSize: 20,
    padding: 6,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
});
