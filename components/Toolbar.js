import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Toolbar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Button
        icon={<EntypoIcon name="home" style={styles.icon}/>}
        onPress={ () => props.setApp('Home') }
        type='clear'
        containerStyle={styles.button}
      />
      <Button
        icon={<FontAwesomeIcon name="clock-o" style={styles.icon}/>}
        onPress={ () => props.setApp('Routines') }
        type='clear'
        containerStyle={styles.button}
      />
      <Button
        icon={<FontAwesomeIcon name="thermometer-full" style={styles.icon}/>}
        onPress={ () => props.setApp('Zones') }
        type='clear'
        containerStyle={styles.button}
      />
      <Button
        icon={<IoniconsIcon name="md-settings" style={styles.icon}/>}
        onPress={ () => props.setApp('Settings') }
        type='clear'
        containerStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
  },
});

export default Toolbar;
