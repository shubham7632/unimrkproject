import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainFile from '../screens/DetailsPage';
import TextInputPage from '../screens/TextInputPage';

function StackNavigator() {

    const Stack = createStackNavigator();
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TextInputPage">
        <Stack.Screen name="MainFile" component={MainFile} />
          <Stack.Screen name="TextInputPage" component={TextInputPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigator