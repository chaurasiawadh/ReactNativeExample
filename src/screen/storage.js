import React, {Component} from 'react';
import {View, TouchableOpacity, Text, AsyncStorage, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../component/Color';

class Storage extends Component {
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
                'https://github.com/Awadhesh786/ReactNativeExample/blob/master/src/screen/storage.js',
            })
          }
        />
      </TouchableOpacity>
    ),
  });

 
  state = {
    'name': ''
 }
 componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
 
 setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
 }
 render() {
    return (
       <View style = {styles.container}>
          <TextInput style = {styles.textInput} 
          onChangeText = {this.setName}/>
          <Text>
             {this.state.name}
          </Text>
       </View>
    )
 }
}
export default Storage;

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 50
    },
    textInput: {
       borderWidth: 1,
       width:100
    }
 })