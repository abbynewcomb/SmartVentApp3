import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

function LogIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Honeywell</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.rect}>
          <TextInput style={styles.inputText} value={'Email Address'} />
        </View>
        <View style={styles.rect}>
          <TextInput style={styles.inputText} value={'Password'} />
        </View>
        <TouchableOpacity style={styles.logIn} onPress={() => props.setApp('Home')} >
          <Text style={styles.smallText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.smallText}>Forgot your password?</Text>
      </View>
      <View style={{flex: 1}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#303030',
  },
  top: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rect: {
    width: 270,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    fontSize: 18,
    color: 'white',
  },
  logIn: {
    width: 200,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
  smallText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LogIn;
