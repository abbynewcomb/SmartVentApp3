import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from 'react-native-elements';

function LogIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.space}/>
      <View style={styles.content}>
        <Text style={styles.text}>Log In</Text>
        <View style={styles.rect}>
          <Text style={styles.inputtext}>Username</Text>
        </View>
        <View style={styles.rect}>
          <Text style={styles.inputtext}>Password</Text>
        </View>
        <Button
          icon={<AntDesign name="rightcircle" style={styles.icon}/>}
          onPress={ () => props.setApp('Home') }
          type='clear'
          containerStyle={styles.button}
        />
      </View>
      <View style={styles.space}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  space: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 3,
    backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rect: {
    width: 271,
    height: 37,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 13,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
  inputtext: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 41,
  }
});

export default LogIn;
