import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function ListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Icon name="chevron-thin-right" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#303030',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 32,
    color: '#303030',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingRight: 20,
  },
  icon: {
    color: '#303030',
    fontSize: 30,
  },
});

export default ListItem;
