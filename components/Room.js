import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Room(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.iconcontainer}>
        <EntypoIcon name="chevron-thin-up" style={styles.icon}/>
        <View style={styles.tempContainer}>
          <Text style={styles.temp}>{props.temp}°</Text>
        </View>
        <EntypoIcon name="chevron-thin-down" style={styles.icon}/>
      </View>
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
  iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: "#303030",
    fontSize: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingRight: 20,
  },
  icon: {
    fontSize: 20,
    color: '#303030',
  },
  tempContainer: {
    width: 70,
    paddingLeft: 6,
    paddingRight: 2,
    alignItems: 'center',
  },
  temp: {
    fontSize: 38,
    color: '#1274b7',
  },
});

export default Room;
