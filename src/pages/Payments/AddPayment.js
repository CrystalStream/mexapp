import React from 'react'
import { View } from 'react-native'
import { Container, Title, Content, Button, Body, Text } from 'native-base'

export default class AddPayments extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Agregar un pago'
  })

  render() { 
    return (
      <Container>
        <Content>
          <View >
            <Title>
              Agregar Pagos
            </Title>
          </View>
        </Content>
      </Container>
    )
  }
}
