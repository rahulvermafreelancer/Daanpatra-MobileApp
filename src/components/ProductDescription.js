import React, {useState} from 'react';
import {Container, Content, Textarea, Form} from 'native-base';

const ProductDescription = () => {

  const [product_description, setProductDescription] = useState("");


  return (
    <Container style={{height: '20%', backgroundColor: '#CAD5E2',}}>
      <Content padder>
        <Form>
          <Textarea  rowSpan={5} bordered  placeholder="Product Description" />
        </Form>
      </Content>
    </Container>
  );
};

export default ProductDescription;
