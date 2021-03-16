import React from 'react';
import {View, ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
} from 'native-base';

import ProfilePic from '../asset/images/profile.jpg';

import Nav from '../components/NewNav'

const Profile = ({navigation, route}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileAlign}>
            <Image source={ProfilePic} style={styles.profilepic} />
            <Text style={styles.nameHeading}>Ramesh Kumar</Text>
          </View>
        </View>
        <Content>
          <List style={styles.lists}>
            <ListItem style={styles.listItems}>
              <Left>
                <Text>Ramesh Kumar</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Text>+917425890012</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Text>Info</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Text>Change Password</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Text>About Daanpatra</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Text>Rate us on AppStore</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Text>Logout</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
        <Nav navigation={navigation}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  heading: {
    flex: 1,
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#DDD101',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderWidth: 0,
    borderRadius: 30,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '700',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilepic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: '5%',
  },
  nameHeading: {
    textAlign: 'center',
    marginTop: '5%',
    fontSize: 25,
    fontWeight: '700',
  },
  profileAlign: {
    width: '100%',
    alignSelf: 'center',
  },
  listItems: {
    marginTop: '5%',
  },
});

export default Profile;
