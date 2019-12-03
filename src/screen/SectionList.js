import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet, SectionList} from 'react-native';
import colors from '../component/Color';
import Header from '../component/Header/header';

class SectonLists extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/SectionList.js',
    });
  };

  GetSectionListItem = item => {
    Alert.alert(item);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle="SectionList" back={this.goBack} code={this.code} />
        <SectionList
          sections={[
            {
              title: 'City Name Starts with A',
              data: ['Agra', 'Alinager', 'Amritsar'],
            },
            {
              title: 'City Name Starts with B',
              data: ['Barabanki', 'Bombay', 'Bangalore'],
            },
            {
              title: 'City Name Starts with C',
              data: ['Chakia', 'Chandauli', 'Chouk'],
            },
          ]}
          renderSectionHeader={({section}) => (
            <Text style={styles.SectionHeader}> {section.title} </Text>
          )}
          renderItem={({item}) => (
            <Text
              style={styles.SectionListItemS}
              onPress={this.GetSectionListItem.bind(this, item)}>
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
export default SectonLists;
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
