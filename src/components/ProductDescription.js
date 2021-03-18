import React from 'react';
import {Container, Content, Textarea, Form} from 'native-base';

const ProductDescription = () => {
  return (
    <Container>
      <Content padder>
        <Form>
          <Textarea  rowSpan={5} bordered  placeholder="Product Description" />
        </Form>
      </Content>
    </Container>
  );
};

export default ProductDescription;
