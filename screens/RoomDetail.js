import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import DetailHeader from "../components/DetailHeader";

function RoomDetail(props) {
  function getVents() {
    let listVents = [];
    let listNames = Object.keys(props.site.rooms[props.stateRoom].vents);
    for (var i=0; i<props.site.rooms[props.stateRoom].numVents; i++) {
      let name = new String(listNames[i]);
      let status = new String(props.site.rooms[props.stateRoom].vents[listNames[i]].status);
      name = name.toUpperCase();
      status = status.toUpperCase();

      let colorstr = new String('');
      if (status === 'OPEN') colorstr = '#7eb338';
      else colorstr = '#be271c';

      listVents.push (
        <View key={i} style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{name}: </Text>
          <Text style={[styles.text, {color: colorstr}]}>{status}</Text>
        </View>
      )
    }
    return listVents;
  }

  return (
    <View style={styles.container}>
      <DetailHeader title={props.stateRoom} setState={props.setRoom} />
      <View style={styles.content}>
        <Text style={[styles.temp, {fontSize: 100, paddingBottom: 20}]}>
          {props.site.rooms[props.stateRoom].temp}°
        </Text>
        <Text style={styles.text}>STATUS: ON TIME</Text>
        {getVents()}
        <View style={styles.iconcontainer}>
          <EntypoIcon name="chevron-thin-up" style={styles.icon}/>
          <View style={styles.tempContainer}>
            <Text style={styles.temp}>{props.site.rooms[props.stateRoom].temp}°</Text>
          </View>
          <EntypoIcon name="chevron-thin-down" style={styles.icon}/>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText]}>HOLD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spacer: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#a0a0a0',
    paddingBottom: 10,
  },
  iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  icon: {
    fontSize: 20,
    color: '#303030',
  },
  tempContainer: {
    width: 60,
    paddingLeft: 6,
    paddingRight: 2,
    alignItems: 'center',
  },
  temp: {
    fontSize: 30,
    color: '#1274b7',
  },
  button: {
    backgroundColor: '#303030',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  }
});

export default RoomDetail;
