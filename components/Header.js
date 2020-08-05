import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header(props) {
  return (
    <View>
      <View style={styles.spacer}/>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'red',
    justifyContent: "center",
  },
  text: {
    marginLeft: 10,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  spacer: {
    height: 10,
    backgroundColor: 'red',
  }
});

export default Header;
