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
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import { PermissionsAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveToken } from '../reducer/persistReducer';
import { useNavigation } from '@react-navigation/native';

function TextInputPage() {

  const [text, SetText] = useState('')
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.persistReducer.token)
  const navigation = useNavigation()

  useEffect(() => {
    axios.post('https://dev-unipanel-api.azurewebsites.net/api/user/loginPanelist', {
      "panelGuid": "75a22a9e-d0e4-4547-af6b-6156bb0760eb",
      "email": "cat23@email.com",
      "password": "Test@123"
    }, {
      headers: {
      }
    }).then((response: any) => {
      dispatch(saveToken(response.data.token.access.token))
    })
  }, [])

  const onPressSend = () => {
      axios.post('https://dev-unipanel-api.azurewebsites.net/api/dummyuser/createStudyType', {
        "studyType" : text
      }, {
        headers: {
          Authorization: 'Bearer ' + token,
          accept: 'application/json'
        }
      }).then((response: any) => {
      })
  }

  const onChangeText = (text: string) => {
    SetText(text)
  }

  return (
    <>
      <TextInput value={text} onChangeText={onChangeText} placeholder='Enter your text' />
      <TouchableOpacity onPress={onPressSend}>
        <Text>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('MainFile')}}>
        <Text>DetailsPage</Text>
      </TouchableOpacity>
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

export default TextInputPage;
