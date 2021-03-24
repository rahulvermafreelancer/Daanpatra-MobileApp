
import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class ProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container style={{height: '20%', backgroundColor: '#CAD5E2',}}>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Cloths" value="key0" />
              <Picker.Item label="Food" value="key1" />
              <Picker.Item label="Books" value="key2" />
              <Picker.Item label="Utensils" value="key3" />
              <Picker.Item label="Equipments" value="key4" />
              <Picker.Item label="Others" value="key5" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}
