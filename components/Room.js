import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Room(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.iconcontainer}>
        <MaterialCommunityIconsIcon name="temperature-fahrenheit" style={styles.icon}/>
        <EntypoIcon name="chevron-thin-right" style={styles.icon}/>
      </View>
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

export default Room;
