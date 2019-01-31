import React from 'react'
import { Card, CardItem, Text, Body, Form, Item, Input, Label } from 'native-base'

export default function (props) {

  return (
     <Form style={{ width: '100%'}}>
        <Item floatingLabel>
          <Label>$ Pago por mes</Label>
          <Input />
        </Item>
      </Form>
  )
}
