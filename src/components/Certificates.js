import React from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

const Certificates = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem thumbnail style={{marginTop: 10}}>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    'https://png.pngtree.com/thumb_back/fw800/back_pic/04/47/51/665858c95c31b60.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Download</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Certificates;
