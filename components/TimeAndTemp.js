import React from "react";
import { StyleSheet, View, Text } from "react-native";

function TimeAndTemp(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.time}>{props.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 25,
  },
  time: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 25,
  },
});

export default TimeAndTemp;
