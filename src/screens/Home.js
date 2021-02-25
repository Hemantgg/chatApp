import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Messages</Text>
          <Feather name="edit" color="tomato" size={24} />
        </View>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search here" placeholderTextColor="gray" />
        </View>
        <View style={styles.activity}>
          <Text style={styles.activitiesText}>Activities</Text>
          {/* <FlatList  data={data} renderItem={}> */}
        </View>
        <View style={styles.messages}>
          <Text style={styles.activitiesText}>Messages</Text>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
  },
  searchBar: {
    backgroundColor: '#e4e4e4',
    padding: 20,
    width: '100%',
    borderRadius: 50,
    marginBottom: 25,
  },
  activity: {
    flex: 1,
    marginVertical: 20,
  },
  activitiesText: {
    fontSize: 18,
    fontWeight: '600',
  },
  messages: {
    flex: 5,
  },
});
