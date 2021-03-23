import React from 'react';
import {Container, Content, Form, Item, Input} from 'native-base';

const ProductQuantity = () => {
  return (
    <Container style={{height: '20%'}}>
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
