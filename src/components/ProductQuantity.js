import React from 'react';
import {Container, Content, Form, Item, Input} from 'native-base';

const ProductQuantity = () => {
  return (
    <Container style={{borderWidth: 1, borderRadius: 40}}>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Product Quantity" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default ProductQuantity;
