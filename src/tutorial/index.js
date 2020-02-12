import React, {Component} from 'react';
import {
  View,
  Alert,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../component/color';
import styles from './tutorialStyle';
import list from './component/list'

class index extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      keys: '',
      urls: '',
      loading: true,
      isModalVisible: false,
    };
  }

  componentDidMount() {    
    this.setState({
      data: list,
      loading: false
    })
  }

  // _ques = async () => {
  //   let url = 'http://5de8ff8fcb3e3800141b8c48.mockapi.io/reactnative/ques';
  //   await fetch(url)
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState({
  //         loading: false,
  //         data: responseJson,
  //         urls: url
  //       });
  //     })
  //     .catch(error => alert(error));
  // };

  toggleModal = key => {
    this.setState({isModalVisible: !this.state.isModalVisible, keys: key});
  };

  _renderItem = item => {
    let keySelect = this.state.keys;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.toggleModal(item.key)}
          style={styles.ques}>
          <Text style={styles.no}>{item.key}.</Text>
          <Text style={styles.quesTxt}>{item.ques}</Text>
        </TouchableOpacity>
        {keySelect === item.key ? (
          <Modal isVisible={this.state.isModalVisible}>
            <TouchableOpacity onPress={this.toggleModal} style={styles.ansPop}>
              <ScrollView>
                <View style={styles.quesPop}>
                  <Text style={styles.quesTxtPop}>{item.ques}</Text>
                </View>
                <Text style={styles.ansTxtPop}>{item.ans}</Text>
              </ScrollView>
            </TouchableOpacity>
          </Modal>
        ) : null}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator color={colors.white} size={40} />
        ) : (
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this._renderItem(item)}
          />
        )}
      </View>
    );
  }
}

export default index;
