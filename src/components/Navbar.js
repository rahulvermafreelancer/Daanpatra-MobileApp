import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from 'react-native';

export default class BottomNavigator extends Component {
  toggleOpen = () => {};

  render() {
    return (
      <View>
        <View style={styles.tabBar}>
          <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>
              <Image
                style={styles.plusIcon}
                resizeMode="contain"
                source={{
                  uri:
                    'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png',
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            // position: 'absolute',
            // backgroundColor: 'white',
            // border: 2,
            // radius: 3,
            // shadowOpacity: 0.3,
            // shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: {marginVertical: 5},
            bottom: 0,
            width: '100%',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}>
          <View style={styles.alignIcon}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Donate');
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={{
                  uri:
                    'https://images.vexels.com/media/users/3/140527/isolated/preview/449b95d58f554656b159dd3ca21ab123-home-round-icon-by-vexels.png',
                }}
                onPress={() => {
                  Alert.alert('Donate');
                }}></Image>
            </TouchableOpacity>
            <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              Home
            </Text>
          </View>

          <View style={styles.alignIcons}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Home');
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={{
                  uri:
                    'https://www.searchpng.com/wp-content/uploads/2019/02/Samsung-Gallery-PNG-Icon.png',
                }}
                onPress={() => {
                  Alert.alert('Gallery');
                }}
              />
            </TouchableOpacity>
            <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              Gallery
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginStart: 85,
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}>
              <Image
                source={{
                  uri:
                    'https://listimg.pinclipart.com/picdir/s/215-2150868_home-menu-icon-png-www-pixshark-com-images.png',
                }}
                onPress={() => {
                  Alert.alert('Certificate');
                }}
                style={{marginHorizontal: 16, width: 30, height: 30}}
                containerStyle={{marginHorizontal: 16}}
              />
            </TouchableOpacity>
            <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              Certificate
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Profile');
              }}>
              <Image
                source={{
                  uri:
                    'https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png',
                }}
                style={{marginHorizontal: 16, width: 30, height: 30}}
                containerStyle={{marginHorizontal: 16}}
              />
            </TouchableOpacity>
            <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              Profile
            </Text>
          </View>

          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    backgroundColor: '#1E90FF',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  tabBar: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'grey',

    width: 70,
    height: 70,
    borderRadius: 35,
    bottom: 35,
    zIndex: 10,
  },
  plusIcon: {
    width: 60,
    height: 60,
  },
  alignIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignIcons: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 30,
  },
});
