import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import TabBar from "fluidbottomnavigation-rn";

export default class NewNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View />
        <TabBar
          onPress={tabIndex => {
            // eslint-disable-next-line no-console
            console.log("render component with index: ", tabIndex);
          }}
          values={[
            { title: "Home", icon: require("../asset/images/home.png") },
            { title: "Gallery", icon: require("../asset/images/image.png") },
            { title: "Doante", icon: require("../asset/images/plus.png") },
            { title: "certificate", icon: require("../asset/images/achivements.png") },
            { title: "Profile", icon: require("../asset/images/user.png") }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});