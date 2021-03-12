import React from 'react';
import {StyleSheet, View} from 'react-native';

import TabBar from "@mindinventory/react-native-tab-bar-interaction";

const TabsBar = () => {

    return (
        <TabBar bgNavBar="skyblue" bgNavBarSelector="yellow" stroke="skyblue">
          <TabBar.Item
              icon={require('../asset/images/home.png')}
              selectedIcon={require('../asset/images/home.png')}
              title="Tab1"
            //   screenBackgroundColor={{ backgroundColor: '#008080' }}
          >
            <View>
                {/*Page Content*/}
            </View>
          </TabBar.Item>
          <TabBar.Item
              icon={require('../asset/images/image.png')}
              selectedIcon={require('../asset/images/image.png')}
              title="Tab2"
            //   screenBackgroundColor={{ backgroundColor: '#F08080' }}
          >
              <View>
                  {/*Page Content*/}
              </View>
          </TabBar.Item>
          <TabBar.Item
              icon={require('../asset/images/user.png')}
              selectedIcon={require('../asset/images/user.png')}
              title="Tab3"
            //   screenBackgroundColor={{ backgroundColor: '#485d72' }}
          >
            <View>
                {/*Page Content*/}
            </View>
          </TabBar.Item>
        </TabBar>
    );
};

export default TabsBar;