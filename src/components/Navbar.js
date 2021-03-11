import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';


const Navbar = () => {
  return (
    <Container>
      <Content />
      <Footer>
        <FooterTab>
          <Button vertical active={true}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="image" />
            <Text>Gallery</Text>
          </Button>
          <Button vertical>
            <Icon name="bookmarks" />
            <Text>Certificate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Navbar;
