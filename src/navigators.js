/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'

import {
  WelcomePage,
  SplashPage,
  NearPaymentsPage,
  PaymentsListPage,
  AddPaymentPage
} from './pages'

const HomeNavigator = createBottomTabNavigator({
  NearPayments: NearPaymentsPage,
  Payments: PaymentsListPage,
  AddPayment: AddPaymentPage
})

const MainNavigator = createStackNavigator({
  Splash: SplashPage,
  Welcome: WelcomePage,
  Home: HomeNavigator
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})

const MainNavigation = createAppContainer(MainNavigator)

export default MainNavigation
