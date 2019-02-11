import React from 'react'
import { View } from 'react-native'
import { Container, Title, Content, Button, Body, Text } from 'native-base'

export default class NearPayments extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Pagos Cercanos'
  })

  render() { 
    return (
      <Container>
        <Content>
          <View >
            <Title>
              Pagos mas cercanos
            </Title>
          </View>
        </Content>
      </Container>
    )
  }
}
