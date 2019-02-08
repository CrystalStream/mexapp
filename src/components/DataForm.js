import React from 'react'
import { Form, Item, Input, Label, Button, Text } from 'native-base'

export default function (props) {

  return (
    <Form style={{ width: '100%'}}>
      <Item floatingLabel>
        <Label>Dinero</Label>
        <Input value={props.data.payPerMonth} onChangeText={props.handleInputPayChange}/>
      </Item>
      <Button onPress={props.onSaveData}>
        <Text>Guardar</Text>
      </Button>
    </Form>
  )
}
