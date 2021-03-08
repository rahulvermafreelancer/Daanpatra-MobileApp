import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Badge,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';


const Navbar = () => {
  return (
    <Container  style={styles.container}>
      <Header />
      <Content />
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="home"/>
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="image" />
            <Text>Gallery</Text>
          </Button>
          <Button vertical>
            <Icon name="plus-circle" />
            <Text>Donate</Text>
          </Button>
          <Button active badge vertical>
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="id-badge" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red'
    }
  });

export default Navbar;
