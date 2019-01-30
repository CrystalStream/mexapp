/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { WelcomePage } from './src/pages'

const MainNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomePage
  }
  // Home: {
  //   screen: HomePage
  // },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator;