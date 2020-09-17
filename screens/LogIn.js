import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";

function LogIn(props) {
  return (
    <ImageBackground 
      source={require('../assets/homePic.jpg')} 
      style={styles.container}
    >
      <View style={styles.tint}>
        <View style={styles.title}>
          <Text style={styles.text}>Honeywell</Text>
        </View>
        <View style={styles.content}>
          <View/>
          <View style={styles.inputs}>
            <View style={styles.rect}>
              <TextInput style={styles.inputText} value={'Email Address'} />
            </View>
            <View style={styles.rect}>
              <TextInput style={styles.inputText} value={'Password'} />
            </View>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.logIn} onPress={() => props.setApp('Home')} >
              <Text style={styles.smallText}>Log In</Text>
            </TouchableOpacity>
            <Text style={[styles.smallText, {fontSize: 15}]}>Forgot your password?</Text>
          </View>
        </View>
        <View style={{flex: 1}}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  tint: {
    backgroundColor: '#30303080',
    flex: 1,
  },
  title: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputs: {
    width: '100%',
    paddingHorizontal: 35,
  },
  rect: {
    margin: 15,
    borderColor: '#e0e0e0',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    fontSize: 18,
    color: 'white',
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
  },
  logIn: {
    width: '56%',
    padding: 10,
    marginBottom: 10,
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
