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
  Splash: {
    screen: SplashPage,
    navigationOptions: {
      header: null
    }
  },
  Welcome: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
}, {
  headerMode: 'screen'
})

const MainNavigation = createAppContainer(MainNavigator)

export default MainNavigation
