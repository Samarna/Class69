import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer>

      </AppContainer>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:BookTransactionScreen},
  Search : {screen:SearchScreen},
})
const AppContainer = createAppContainer(TabNavigator);