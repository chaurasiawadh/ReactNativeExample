import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import colors from '../component/color';

class FlatLists extends Component {
  constructor() {
    super();
    this.state = {
      FlatListItems: [
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
      ],
      refreshing: false,
    };
  }

  goBack = () => {
    this.props.navigation.goBack(null);
  };
  code = () => {
    this.props.navigation.navigate('Git', {
      url:
        'https://raw.githubusercontent.com/Awadhesh786/ReactNativeExample/master/src/screen/flatList.js',
    });
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 8,
          width: '100%',
          backgroundColor: colors.primary,
        }}
      />
    );
  };

  onRefresh = async () => {
    this.setState({
      refreshing: true,
    });

    this.setState({
      refreshing: false,
    });
  };

  GetFlatListItem = item => {
    Alert.alert(item);
  };

  render_FlatList_footer = () => {
    var footer_View = (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> Footer </Text>
      </View>
    );

    return footer_View;
  };

  render_FlatList_header = () => {
    var header_View = (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> Header </Text>
      </View>
    );

    return header_View;
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          onRefresh={this.onRefresh}
          refreshing={this.state.refreshing}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => this.GetFlatListItem(item.key)}>
              <Text style={styles.key}>{item.key}</Text>
              <Text style={styles.population}>{item.population}</Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={this.render_FlatList_header}
          ListFooterComponent={this.render_FlatList_footer}
        />
      </View>
    );
  }
}

export default FlatLists;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'iOS' ? 20 : 0,
  },

  key: {
    fontSize: 28,
    color: 'blue',
  },
  population: {
    color: 'red',
    fontSize: 20,
  },

  header_footer_style: {
    width: '100%',
    height: 44,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'yellow',
  },
});
