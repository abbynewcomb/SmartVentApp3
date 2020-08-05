import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

function DetailHeader(props) {
  return (
    <View>
      <View style={styles.spacer}/>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.setApp(props.returnTo)}>
            <EntypoIcon name="chevron-thin-left" style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.text}>{props.title}</Text>
        <FeatherIcon name="edit-3" style={styles.icon}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'red',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    marginLeft: 10,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    fontSize: 30,
  },
  spacer: {
    height: 10,
    backgroundColor: 'red',
  }
});

export default DetailHeader;
