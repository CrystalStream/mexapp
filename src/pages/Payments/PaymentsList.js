import React from 'react'
import { View } from 'react-native'
import { Container, Title, Content, Button, Body, Text } from 'native-base'

export default class PaymentList extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Ver todos los pagos'
  })

  render() { 
    return (
      <Container>
        <Content>
          <View >
            <Title>
              Lista de pagos
            </Title>
          </View>
        </Content>
      </Container>
    )
  }
}
