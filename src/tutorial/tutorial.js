import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import QuestionList from './component/list';
import styles from './tutorialStyle';
import Modal from 'react-native-modal';
import colors from '../assets/color';

class Tutorial extends Component {

  state = {
    data: [],
    keys: '',
    urls: '',
    loading: true,
    isModalVisible: false,
  };


  componentDidMount() {
    this.setState({
      data: QuestionList,
      loading: false
    })
  }

  toggleModal = key => {
    this.setState({ isModalVisible: true, keys: key });
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
          <Modal
            onBackdropPress={() => this.setState({ isModalVisible: false })}
            isVisible={this.state.isModalVisible}>
            <View style={styles.ansPop}>
              <ScrollView>
                <View style={styles.quesPop}>
                  <Text style={styles.quesTxtPop}>{item.ques}</Text>
                </View>
                <Text style={styles.ansTxtPop}>{item.ans}</Text>
              </ScrollView>
            </View>
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
              renderItem={({ item }) => this._renderItem(item)}
            />
          )}
      </View>
    );
  }
}

export default Tutorial;
