import React from 'react';
import {Container, Header, Content, Textarea, Form} from 'native-base';

const ProductDescription = () => {
  return (
    <Container>
      <Content padder>
        <Form>
          <Textarea rowSpan={5} bordered placeholder="Textarea" />
        </Form>
      </Content>
    </Container>
  );
};

export default ProductDescription;
