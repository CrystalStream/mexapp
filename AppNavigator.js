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

import { WelcomePage, SplashPage, DashboardPage } from './src/pages'

const MainNavigator = createStackNavigator({
  Splash: {
    screen: SplashPage
  },
  Welcome: {
    screen: WelcomePage
  },
  Dashboard: {
    screen: DashboardPage
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator
