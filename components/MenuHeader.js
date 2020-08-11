import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";

function MenuHeader(props) {
  return (
    <View style={styles.spacer} >
      <View style={{height: 18}}/>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.setMenu(!props.stateMenu)} style={styles.iconContainer}>
          <SimpleLineIconsIcon name="menu" style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.text}>{props.title}</Text>
        <View style={styles.iconContainer}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    height: 65,
    backgroundColor: '#303030',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    height: 45
  },
  iconContainer: {
    width: 28,
  },
  text: {
    marginLeft: 10,
    color: 'white',
    fontSize: 30,
  },
  icon: {
    color: 'white',
    fontSize: 28,
  },
});

export default MenuHeader;
