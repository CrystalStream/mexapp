import React from 'react'
import { View } from 'react-native'
import { 
  Container,
  Title,
  Content,
  Body,
  Text,
  List,
  ListItem,
  Footer,
  FooterTab,
  Button
} from 'native-base'

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
          <View>
            <List>
              <ListItem>
                <Text>Simon Mignolet</Text>
              </ListItem>
              <ListItem>
                <Text>Nathaniel Clyne</Text>
              </ListItem>
              <ListItem>
                <Text>Dejan Lovren</Text>
              </ListItem>
            </List>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
