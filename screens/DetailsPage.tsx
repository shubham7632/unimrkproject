/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function MainFile() {

  const [data, SetData] = useState({})
  const token = useSelector((state: any) => state.persistReducer.token)

  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get('https://dev-unipanel-api.azurewebsites.net/api/dummyuser/getStudyType',
    {
      headers: {
        Authorization: 'Bearer ' + token,
        accept: 'application/json'
      }}
      ).then((response: any) => {
      SetData(response.data)
    },)
  }, [])


  const renderItem = ({ item }: any) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={{ fontSize: 16, color: 'black' }}>{item.studyType}</Text>
        </View>
      </View>
    )
  }
  return (
    <>
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList data={data.data} renderItem={renderItem} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MainFile;
