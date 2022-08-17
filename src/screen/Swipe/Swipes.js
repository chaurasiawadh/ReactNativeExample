import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import color from '../../assets/color';
import ItemList from './ItemList';

const POPULATIONS = [
  {key: 'China', population: '1,433,783,686'},
  {key: 'India', population: '1,366,417,754'},
  {key: 'Indonesia', population: '270,625,568'},
  {key: 'Japan', population: '126,860,301'},
  {key: 'Philippines', population: '108,116,615'},
  {key: 'Thailand', population: '69,625,582'},
];

export const Swipe = () => {
  const [populationData, setPopulationData] = useState(POPULATIONS);
  const [isEnable, setIsEnable] = useState(true);
  

  const renderSeparator = () => {
    return (
      <View style={styles.separatorViewStyle}>
        <View style={styles.separatorStyle} />
      </View>
    );
  };

  const success = key => {
    const data = populationData.filter(item => item.key !== key);
    setPopulationData(data);
  };

  setScrollEnabled = (enable) => {
    setIsEnable(enable);
  };

  const renderItem = item => {
    return (
      <ItemList
        text={item.key}
        population={item.population}
        success={success}
        setScrollEnabled={() => setScrollEnabled(enable)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>Swipe right side of cards</Text>
      <View>
        <Text style={styles.title}>Country with Population(2019)</Text>
      </View>
      <FlatList
     //   style={style}
      //  data={data}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({item}) => renderItem(item)}
        scrollEnabled={isEnable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    margin: 16,
    fontWeight: 'bold',
    backgroundColor: color.header,
    padding: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
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
