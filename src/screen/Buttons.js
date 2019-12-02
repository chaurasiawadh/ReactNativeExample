import React, {Component} from 'react';
import {
  Platform,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../component/Color';

export default class Buttons extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Button',
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
                'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/Buttons.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View style={{padding: 15}}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Button
              title="Next"
              color="#e3f2fd"
              onPress={() =>
                ToastAndroid.show('Click on Next...', ToastAndroid.SHORT)
              }
            />
          </View>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 15}}>
            <Button
              title="Back"
              color="#bbdefb"
              onPress={() =>
                ToastAndroid.show('Click on Back...', ToastAndroid.SHORT)
              }
            />
          </TouchableOpacity>
          <View style={{marginTop: 15}}>
            <Button
              title="Save"
              color="#90caf9"
              onPress={() =>
                ToastAndroid.show('Click on Save', ToastAndroid.SHORT)
              }
            />
          </View>

          <TouchableOpacity style={{marginTop: 15}}>
            <Button
              title="Confirm"
              color="#64b5f6"
              onPress={() => ToastAndroid.show('Confirm', ToastAndroid.SHORT)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ToastAndroid.show('Calling', ToastAndroid.SHORT)}
            style={{
              marginTop: 15,
              flexDirection: 'row',
              backgroundColor: '#43a5f5',
              justifyContent: 'center',
              padding: 8,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Call
            </Text>
            <Icon
              name="phone"
              size={20}
              style={{alignSelf: 'center', marginLeft: 10, color: 'black'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderColor: '#2196f3', borderWidth: 0.3, marginTop: 15}}>
            <Button
              title="Pay"
              color="#2196f3"
              onPress={() =>
                ToastAndroid.show('Click on Pay', ToastAndroid.SHORT)
              }
            />
          </TouchableOpacity>

          <View style={{marginTop: 15, borderWidth: 1.5}}>
            <Button
              title="Show"
              color="#1e88e5"
              onPress={() =>
                ToastAndroid.show('Click on Show', ToastAndroid.SHORT)
              }
            />
          </View>

          <View
            style={{
              backgroundColor: '#000',
              borderRadius: 3,
              padding: 3,
              marginTop: 15,
            }}>
            <Button
              title="Payment"
              color="#1976d2"
              onPress={() =>
                ToastAndroid.show('Click on Payment', ToastAndroid.SHORT)
              }
            />
          </View>
          <TouchableOpacity style={{marginTop: 15, alignSelf: 'flex-start'}}>
            <Button
              title="Re-send"
              color="#1565c0"
              onPress={() => ToastAndroid.show('Re-send..', ToastAndroid.SHORT)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 15, alignItems: 'flex-end'}}>
            <Button
              title="Submit"
              color="#0d47a1"
              onPress={() => ToastAndroid.show('Submit', ToastAndroid.SHORT)}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
