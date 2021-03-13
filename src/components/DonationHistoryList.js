import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {
  Container,
  Header,
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

// const renderList = () => (
//   <Container>
//     <Header />
//     <Content>
//       <List>
//         <ListItem thumbnail>
//           <Left>
//             <Thumbnail square source={{uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F09%2F03%2Fonce-i-was-you-1020boo.jpg'}} />
//           </Left>
//           <Body>
//             <Text>Books</Text>
//             <Text note numberOfLines={1}>
//               Items that you donate recently....
//             </Text>
//           </Body>
//           <Right>
//             <TouchableOpacity>
//               <Button transparent>
//                 <Text>View</Text>
//               </Button>
//             </TouchableOpacity>
//           </Right>
//         </ListItem>
//       </List>
//     </Content>
//   </Container>
// );

const DonationHistoryList = () => {
  // const renderItems = () => (<renderList />)

  return (
    <Container>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F09%2F03%2Fonce-i-was-you-1020boo.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Books</Text>
              <Text note numberOfLines={1}>
                Items that you donate recently....
              </Text>
            </Body>
            <Right>
              <TouchableOpacity>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </TouchableOpacity>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default DonationHistoryList;
