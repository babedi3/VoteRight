import React from "react";
import { Easing, Button, StyleSheet, Text, View } from "react-native";
import Modal from "./lib/src/components";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          isOpen
          backdrop
          ref="modalRef"
          easing={Easing.elastic(1)}
          style={{
            width: 300,
            height: 300,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent"
          }}
        >
          <View
            style={{
              width: 300,
              height: 300,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#941583"
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "white",
                textAlign: "center"
              }}
            >
              Open up App.js to start working on your app!
            </Text>
          </View>
        </Modal>
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
