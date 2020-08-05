import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function RoomNoArrow(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <MaterialCommunityIconsIcon name="temperature-fahrenheit" style={styles.icon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  iconcontainer: {
    flexDirection: 'row',
  },
  text: {
    color: "black",
    fontSize: 25,
  },
  icon: {
    fontSize: 30,
  },
});

export default RoomNoArrow;
