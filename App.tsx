/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet
} from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainFile from './screens/TextInputPage';
import { persistor, store } from './store/store';
import StackNavigator from './rootstack/stackNavigation';

function App() {

  const [text, SetText] = useState('')
  const [token, SetToken] = useState('')

  const onChangeText = (text: string) => {
    SetText(text)
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <StackNavigator/>
      </PersistGate>
    </Provider>
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

export default App;
