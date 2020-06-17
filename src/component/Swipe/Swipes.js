import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import color from '../color';
import ItemList from './ItemList';


const listData = [
  {key: 'China', population: '1,433,783,686'},
  {key: 'India', population: '1,366,417,754'},
  {key: 'Indonesia', population: '270,625,568'},
  {key: 'Japan', population: '126,860,301'},
  {key: 'Philippines', population: '108,116,615'},
  {key: 'Thailand', population: '69,625,582'},
];

class Swipe extends Component {
  state = {
      enable: true,
      data: listData,
    };

  renderSeparator = ()=> {
    return (
      <View style={styles.separatorViewStyle}>
        <View style={styles.separatorStyle} />
      </View>
    );
  }

  success =(key)=> {
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({
      data,
    });
  }

  setScrollEnabled=(enable)=> {
    this.setState({
      enable,
    });
  }

  renderItem=(item) => {
    return (
      <ItemList
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
        <Text>Swipe right side of cards</Text>
        <View>
          <Text style={{fontSize:16, color:"#fff", textAlign:"center", margin:16, fontWeight:"bold", 
          backgroundColor: color.header, padding:16}}>Country with Population(2019)</Text>
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
    padding:16
  },
  separatorViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  separatorStyle: {
    height: 1,
    margin:10
  },
});
