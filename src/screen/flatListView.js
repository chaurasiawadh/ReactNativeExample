import React, {useCallback, useState} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';

const POPULATIONS = [
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
export const FlatLists = () => {
  const [refreshing, setRefreshing] = useState(false);

  const flatListItemSeparator = useCallback(() => {
    return <View style={styles.container} />;
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const getFlatListItem = useCallback(item => {
    Alert.alert(item.key, item.population);
  }, []);

  const renderFlatListFooter = useCallback(() => {
    return (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> Footer </Text>
      </View>
    );
  }, []);

  const renderFlatListHeader = useCallback(() => {
    return (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> Header </Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={POPULATIONS}
        ItemSeparatorComponent={flatListItemSeparator}
        onRefresh={onRefresh}
        refreshing={refreshing}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.key}
            style={styles.container1}
            onPress={() => getFlatListItem(item)}>
            <Text style={styles.key}>{item.key}</Text>
            <Text style={styles.population}>
              Population: {'  '} {item.population}
            </Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={renderFlatListHeader}
        ListFooterComponent={renderFlatListFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    width: '100%',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    // @ts-ignore
    paddingTop: Platform.OS === 'iOS' ? 20 : 0,
  },
  key: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  population: {
    color: '#ffffff',
    fontSize: 20,
  },
  header_footer_style: {
    width: '100%',
    height: 44,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21,
  },
  container1: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'gray',
  },
});
