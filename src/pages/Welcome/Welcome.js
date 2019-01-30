import React from 'react'
import { createStackNavigator, createAppNavigator } from 'react-navigation'
import { View } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
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
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}