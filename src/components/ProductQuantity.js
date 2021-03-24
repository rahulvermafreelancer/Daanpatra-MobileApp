import React, {useState} from 'react';
import {Container, Content, Form, Item, Input} from 'native-base';

const ProductQuantity = () => {

  const [quantity, setQuantity] = useState();

  return (
    <Container style={{height: '20%', backgroundColor: '#CAD5E2',}}>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Product Quantity"  />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default ProductQuantity;
