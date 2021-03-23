import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import GridList from 'react-native-grid-list';

const items = [
  { thumbnail: { uri: 'https://miro.medium.com/max/13334/1*l5gYlnoOxfxdkaLUiQwGCg.png' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC0QbzIqwJm7-7Mitst-2y8cvPV-TAO51Fw&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBftdBY4Y0TI6jmMsGU615evHqzY5w9IuL3Q&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNCaNZ3Idv6vQZ_PsK06OcpDkkzJDNUgFEA&usqp=CAU' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/13334/1*l5gYlnoOxfxdkaLUiQwGCg.png' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC0QbzIqwJm7-7Mitst-2y8cvPV-TAO51Fw&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNCaNZ3Idv6vQZ_PsK06OcpDkkzJDNUgFEA&usqp=CAU' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/13334/1*l5gYlnoOxfxdkaLUiQwGCg.png' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC0QbzIqwJm7-7Mitst-2y8cvPV-TAO51Fw&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBftdBY4Y0TI6jmMsGU615evHqzY5w9IuL3Q&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNCaNZ3Idv6vQZ_PsK06OcpDkkzJDNUgFEA&usqp=CAU' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/13334/1*l5gYlnoOxfxdkaLUiQwGCg.png' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC0QbzIqwJm7-7Mitst-2y8cvPV-TAO51Fw&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNCaNZ3Idv6vQZ_PsK06OcpDkkzJDNUgFEA&usqp=CAU' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/13334/1*l5gYlnoOxfxdkaLUiQwGCg.png' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC0QbzIqwJm7-7Mitst-2y8cvPV-TAO51Fw&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBftdBY4Y0TI6jmMsGU615evHqzY5w9IuL3Q&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNCaNZ3Idv6vQZ_PsK06OcpDkkzJDNUgFEA&usqp=CAU' } },
  { thumbnail: { uri: 'https://miro.medium.com/max/13334/1*l5gYlnoOxfxdkaLUiQwGCg.png' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC0QbzIqwJm7-7Mitst-2y8cvPV-TAO51Fw&usqp=CAU' } },
  { thumbnail: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNCaNZ3Idv6vQZ_PsK06OcpDkkzJDNUgFEA&usqp=CAU' } },
];

export default class App extends PureComponent {

  
  renderItem = ({ item, index }) => (
    <Image style={styles.image} source={item.thumbnail} />
  );

  render() {
    return (
      <View style={styles.container}>
        <GridList
          showSeparator
          separatorBorderWidth={10}
          separatorBorderColor='white'
          data={items}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});