import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Color'

import GetSetClear from './getSetClear';
import MergeItem from './merge';

const TESTS = {
  GetSetClear: {
    title: 'Get Value/ Set Value/ Save Value',
    testId: 'get-set-clear',
    description: 'Store and retrieve persisted data',
    render() {
      return <GetSetClear />;
    },
  },
  MergeItem: {
    title: 'Get Key/ Store Key',
    testId: 'get-set',
    description: 'Merge object with already stored data',
    render() {
      return <MergeItem />;
    },
  },
};

export default class App extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Storage',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="code"
          size={25}
          style={{marginRight: 20}}
          color="white"
          onPress={() =>
            navigation.navigate('Git', {
              url:
                'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/storage.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

  state = {
    restarting: false,
    currentTest: TESTS.GetSetClear,
  };

  _simulateRestart = () => {
    this.setState({restarting: true}, () => this.setState({restarting: false}));
  };

  _changeTest = testName => {
    this.setState({currentTest: TESTS[testName]});
  };

  render() {
    const {restarting, currentTest} = this.state;
    return (
      <SafeAreaView style={styles.container}>
       
        <TouchableOpacity
          testID="restart_button"
          onPress={this._simulateRestart}
          style={styles.restartButton}
          activeOpacity={0.6}>
          <Text>Restart</Text>
        </TouchableOpacity>

        <View style={styles.testPickerContainer}>
          <View style={{margin: 10}}>
          <Button
            testID="testType_getSetClear"
            title=" Get/Set/Clear "
            onPress={() => this._changeTest('GetSetClear')}
          />
          </View>
          <View style={{margin: 10}}>
          <Button
            testID="testType_mergeItem"
            title=" Input Data "
            onPress={() => this._changeTest('MergeItem')}
          />
          </View>
          
        </View>

        {restarting ? null : (
          <View
            testID={`example-${currentTest.testId}`}
            key={currentTest.title}
            style={styles.exampleContainer}>
            <Text style={styles.exampleTitle}>{currentTest.title}</Text>
            <Text style={styles.exampleDescription}>
              {currentTest.description}
            </Text>
            <View style={styles.exampleInnerContainer}>
              {currentTest.render()}
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 8,
  },
  exampleContainer: {
    padding: 16,
    backgroundColor: '#FFF',
    borderColor: '#EEE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
  },
  exampleTitle: {
    fontSize: 18,
  },
  exampleDescription: {
    color: '#333333',
    marginBottom: 16,
  },
  exampleInnerContainer: {
    borderColor: '#EEE',
    borderTopWidth: 1,
    paddingTop: 10,
    flex: 1,
  },
  restartButton: {
    padding: 6,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  closeKeyboardView: {
    width: 50,
    height: 50,
    backgroundColor:"red"
  },
  testPickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf:"center"
  },
});
