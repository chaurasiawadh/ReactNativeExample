import React, {Component, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import GetSetClear from './getSetClear';
import MergeItem from './merge';

const TESTS = {
  GetSetClear: {
    title: 'Get Value/ Set Value/ Save Value',
    testId: 'get-set-clear',
    description: 'Store and retrieve persisted data',
    // render() {
    //   return <GetSetClear />;
    // },
  },
  MergeItem: {
    title: 'Get Key/ Store Key',
    testId: 'get-set',
    description: 'Merge object with already stored data',
    // render() {
    //   return <MergeItem />;
    // },
  },
};

export const Storage = () => {
  const [restart, setRestart] = useState(false);
  const [currentTest, setCurrentTest] = useState({});

  setCurrentTest(TESTS.GetSetClear);

  const simulateRestart = () => {
    setRestart(true);
    () => setRestart(false);
  };

  const changeTest = testName => {
    setCurrentTest(TESTS[testName]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        testID="restart_button"
        onPress={simulateRestart}
        style={styles.restartButton}
        activeOpacity={0.6}>
        <Text>Restart</Text>
      </TouchableOpacity>

      <View style={styles.testPickerContainer}>
        <View style={{margin: 10}}>
          <Button
            testID="testType_getSetClear"
            title=" Get/Set/Clear "
            onPress={() => changeTest('GetSetClear')}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            testID="testType_mergeItem"
            title=" Input Data "
            onPress={() => changeTest('MergeItem')}
          />
        </View>
      </View>

      {restart ? null : (
        <View
          testID={`example-${currentTest.testId}`}
          key={currentTest.title}
          style={styles.exampleContainer}>
          <Text style={styles.exampleTitle}>{currentTest.title}</Text>
          <Text style={styles.exampleDescription}>
            {currentTest.description}
          </Text>
          <View style={styles.exampleInnerContainer}>
            {currentTest}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

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
    backgroundColor: 'red',
  },
  testPickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
});
