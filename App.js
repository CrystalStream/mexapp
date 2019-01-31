import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import AppNavigator from './AppNavigator'

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
}