/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { CardDataList } from "./data/CardData";
import { FlashList } from '@shopify/flash-list';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Friday, 15 Dec</Text>
        <Icon  name='magnify' size={25} color={"#d3d3d3"}/>
      </View>

      <View style={styles.headerContainer}>
      <Text style={styles.header}>Learn</Text>
      <Text style={styles.subHeader}>Choose the part of the body</Text>
      </View>

      <View style={{top:10, height:500}}>
      <FlashList 
      data={CardDataList}
      renderItem={({ item }) =>
      <View style={{height:100,backgroundColor:item?.color,
      borderRadius:20,marginTop:20
      }}> 
      <View style={styles.textContainer}>
      <Text style={styles.dataText}>{item.text}</Text>
      <Text style={styles.subDataText}>{item.number} diseases</Text>
      </View>
      </View>}
      estimatedItemSize={100}
    />
</View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop:30,
    padding:10

  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText:{
    color:'#d3d3d3',
    fontWeight:'800'
  },
  headerContainer:{
    marginTop: 20,
    flexDirection:'column'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  dataText: {
    fontSize: 20,
    color: 'white',
   
  },
  subDataText:{
    fontSize: 10,
    color: 'white',
    marginTop:5
  },
  textContainer:{
    flexDirection:'column',
    paddingTop:25,
    paddingLeft:20
  }
});

export default App;
