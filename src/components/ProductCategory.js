import React from 'react';
import {Container, Content, Form, Item, Picker, Icon} from 'native-base';

const ProductCategory = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}>
              <Picker.Item label="Cloths" value="key0" />
              <Picker.Item label="Food" value="key1" />
              <Picker.Item label="Equipment" value="key2" />
              <Picker.Item label="Books" value="key3" />
              <Picker.Item label="Other" value="key4" />
              <Picker.Item label="Utensils" value="key5" />
            </Picker>
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default ProductCategory;
