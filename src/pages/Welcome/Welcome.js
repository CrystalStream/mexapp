import React from 'react'
import { createStackNavigator, createAppNavigator } from 'react-navigation'
import { View } from 'react-native'
import { Container, Title, Content, Button, Body, Text } from 'native-base'
import { Storage, validate } from '../../utils'
import config from '../../enviroments/'
import styles from './styles'

import { DataForm } from '../../components/'

export default class Welcome extends React.Component {

  state = {
    payPerMonth: ''
  }

  async componentDidMount() {
    const loginKey = Storage.retrieveItem(config.firstLoginKey)
  }

  onSavePaymentInfo = () => {
    const { navigate } = this.props.navigation

    if (!validate(this.state.payPerMonth, { required: true, number: true })) return alert('Ingresa un valor porfavor')

    navigate('Dashboard')
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
            <DataForm 
              data={{ payPerMonth: this.state.payPerMonth }}
              onSaveData={this.onSavePaymentInfo}
              handleInputPayChange={(val) => this.setState({ payPerMonth: val })}/>
          </View>
        </Content>
      </Container>
    )
  }
}
