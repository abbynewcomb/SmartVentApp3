import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function MenuHeader(props) {
  return (
    <View>
      <View style={styles.spacer}/>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => props.setMenu(!props.stateMenu)}>
            <EntypoIcon name="menu" style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 5, alignItems: 'center'}}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
        <View style={{flex: 1}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'red',
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
    fontSize: 40,
  },
  spacer: {
    height: 10,
    backgroundColor: 'red',
  }
});

export default MenuHeader;
