import React from "react";
import { StyleSheet, View } from "react-native";

import PrograssBarCircle from "./components/PrograssBarCircle";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PrograssBarCircle
          percent={95}
          radius={100}
          ringWidth={30}
          ringColor="#4286f4"
          ringBgColor="gray"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
