import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import DonateImage from '../asset/images/Donate.png';

import Carousel from 'react-native-snap-carousel';

const Cards = () => {


  return (
   
    <Container style={styles.container}>
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
                <Icon active name="heart"  />
                <Text>Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>Comment</Text>
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
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default Cards;
