import React from 'react'
import { View } from 'react-native'
import { Container, Title, Content, Body, Text } from 'native-base'

export default class Dashboard extends React.Component {

  render() { 
    return (
      <Container>
        <Content>
          <View>
            <Title>
              Dashboard
            </Title>
          </View>
        </Content>
      </Container>
    )
  }
}
