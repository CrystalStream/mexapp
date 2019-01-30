import React from 'react'
import { createStackNavigator, createAppNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Storage } from '../../utils'
import config from '../../enviroments/'
import styles from './styles'

export default class Welcome extends React.Component {

  componentDidMount() {
    console.log('antes')
    const loginKey = Storage.retrieveItem(config.firstLoginKey)
    console.log('despues')
  }

  render() { 
    return (
      <View style={styles.homeContainer}>
        <Text>Details Screen</Text>
      </View>
    )
  }
}