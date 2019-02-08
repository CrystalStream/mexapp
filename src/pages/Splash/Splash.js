import React from 'react'
import { View } from 'react-native'
import { Container, Title, Content, Button, Body, Text } from 'native-base'
import config from '../../enviroments/'

export default class Splash extends React.Component {

  componentDidMount() {
    const { navigate } = this.props.navigation

    setTimeout(() => {
      navigate('Welcome')
    }, 500)
  }

  render() { 
    return (
      <Container>
        <Content>
          <View >
            <Title>
              Bienvenido
            </Title>
          </View>
        </Content>
      </Container>
    )
  }
}
