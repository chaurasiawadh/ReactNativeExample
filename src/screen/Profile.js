import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import colors from '../componenet/Color';

export default class Profile extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Profile',
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0,
    },
    headerTintColor: '#fff',
  });
  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={styles.card}>
          <Text style={styles.txt}>User Name</Text>
          <Text style={styles.txt}>Mobile No..</Text>
          <TouchableOpacity style={styles.btn}>
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              style={{backgroundColor: 'red'}}
              title="Update"></Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    //backgroundColor:"red",
    padding: 30,
  },
  txt: {
    alignSelf: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  btn: {
    marginTop: 40,
    backgroundColor: '#00f',
  },
});
