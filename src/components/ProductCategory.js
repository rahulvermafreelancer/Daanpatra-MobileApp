import React from 'react';
import {Container, Content, Form, Item, Input} from 'native-base';

const ProductCategory = () => {
  return (
    <Container style={{borderWidth: 1, borderRadius: 40,}}>
      <Content>
        <Form>
          <Item >
            <Input placeholder="Product Categories" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default ProductCategory;
