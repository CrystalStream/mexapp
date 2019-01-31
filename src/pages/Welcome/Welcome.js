import React from 'react'
import { createStackNavigator, createAppNavigator } from 'react-navigation'
import { View } from 'react-native'
import { Container, Title, Content, Button, Body, Text } from 'native-base'
import { Storage } from '../../utils'
import config from '../../enviroments/'
import styles from './styles'

import { DataForm } from '../../components/'

export default class Welcome extends React.Component {

  async componentDidMount() {
    const loginKey = Storage.retrieveItem(config.firstLoginKey)
  }

  render() { 
    return (
      <Container style={styles.homeContainer}>
        <Content>
          <View style={styles.headerView}>
            <Title>
              Ganancia por mes
            </Title>
          </View>
          <View style={styles.mainContent}>
            <DataForm />
          </View>
        </Content>
      </Container>
    )
  }
}
