import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

class Profile extends Component {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src//screen/VectorIcon.js',
    });
  };

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

export default Profile;

const styles = StyleSheet.create({
  card: {
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
