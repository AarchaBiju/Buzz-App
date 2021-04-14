import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import FaceBook from './Screens/FaceBook';
import Instagram from './Screens/Instagram';

import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

export default class App extends React.Component {
  render(){
  return <AppContainer />;

}
}



const TabNavigator = createBottomTabNavigator({
Instagram : {screen : Instagram},
FaceBook :{screen : FaceBook}
})

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
