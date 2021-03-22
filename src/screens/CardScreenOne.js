import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';

const cards = [
  {
    title: 'We belive in doing not just thinking',
    subTitle: 'We are a family',
    image: require('../asset/images/FirstScreen.jpg'),
    imageBottom: require('../asset/images/LastScreen.jpg'),
  },
  {
    title: 'Make our dream true',
    subTitle: 'We are a ca do it',
    image: require('../asset/images/FirstScreen.jpg'),
    imageBottom: require('../asset/images/LastScreen.jpg'),
  },
  {
    title: 'Lets make a new world happieness',
    subTitle: 'Live happy and healthy',
    image: require('../asset/images/FirstScreen.jpg'),
    imageBottom: require('../asset/images/LastScreen.jpg'),
  },
];

export default class CardScreenOne extends Component {
  render() {
    return (
      <Container style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
          <DeckSwiper
          style={{ backgroundColor: 'white'}}
            dataSource={cards}
            looping={false}
            renderItem={(item) => (
              <Card style={{elevation: 3,}} >
                <CardItem cardBody>
                  <Image style={{height: 350, flex: 1}} source={item.image} />
                </CardItem>
                <CardItem>
                  <Text style={{fontSize: 35}}>Daanpatra</Text>
                </CardItem>
                <CardItem >
                  <Body>
                    <Text style={{fontSize: 20}}>{item.title}</Text>
                    <Text style={{fontSize: 18}}>{item.subTitle}</Text>
                  </Body>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{height: 320, flex: 1}}
                    source={item.imageBottom}
                  />
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}





