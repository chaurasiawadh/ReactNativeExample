import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import ListItem from './components/ListItem';

const listData = [
  {key: 'China', population: '1,433,783,686'},
  {key: 'India', population: '1,366,417,754'},
  {key: 'Indonesia', population: '270,625,568'},
  {key: 'Pakistan', population: '216,565,318'},
  {key: 'Bangladesh', population: '163,046,161'},
  {key: 'Japan', population: '126,860,301'},
  {key: 'Philippines', population: '108,116,615'},
  {key: 'Vietnam', population: '96,462,106'},
  {key: 'Turkey', population: '83,429,615'},
  {key: 'Iran', population: '82,913,906'},
  {key: 'Thailand', population: '69,625,582'},
  {key: 'Myanmar', population: '54,045,420'},
  {key: 'South Korea', population: '51,225,308'},
  {key: 'Iraq', population: '39,309,783'},
  {key: 'Afghanistan', population: '38,041,754'},
];

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.renderSeparator = this.renderSeparator.bind(this);
    this.success = this.success.bind(this);
    this.setScrollEnabled = this.setScrollEnabled.bind(this);

    this.state = {
      enable: true,
      data: listData,
    };
  }

  renderSeparator() {
    return (
      <View style={styles.separatorViewStyle}>
        <View style={styles.separatorStyle} />
      </View>
    );
  }

  success(key) {
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({
      data,
    });
  }

  setScrollEnabled(enable) {
    this.setState({
      enable,
    });
  }

  renderItem(item) {
    return (
      <ListItem
        text={item.key}
        population={item.population}
        success={this.success}
        setScrollEnabled={enable => this.setScrollEnabled(enable)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 24,
              color: '#fff',
              textAlign: 'center',
              margin: 16,
              fontWeight: 'bold',
              backgroundColor: 'red',
              padding: 16,
            }}>
            Country with Population(2019)
          </Text>
        </View>
        <FlatList
          style={this.props.style}
          data={this.state.data}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({item}) => this.renderItem(item)}
          scrollEnabled={this.state.enable}
        />
      </View>
    );
  }
}

export default Swipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  list: {
    flex: 1,
    marginTop: 32,
  },
  separatorViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  separatorStyle: {
    height: 1,
    margin: 10,
  },
});
