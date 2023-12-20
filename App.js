import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}> 
      <HomeScreen/>
      <StatusBar style="auto"/>
    </Provider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start', // Align content to the left
    justifyContent: 'flex-start', // Align content at the top
    paddingHorizontal: 10, // Add horizontal padding for space
    paddingTop: 10, // Add top padding for space
  },
});
