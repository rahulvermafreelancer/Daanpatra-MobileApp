import React from 'react';
import {Image, StyleSheet , TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

import DonateImage from '../asset/images/Donate.png';


const Cards = () => {
  return (
    <Container style={styles.container}>
      <Header />
      <Content>
        <Card>
          <CardItem cardBody>
            <Image
              source={DonateImage}
              style={{height: 140, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({

  container: {
      backgroundColor: 'red'
  }
});

export default Cards; 
