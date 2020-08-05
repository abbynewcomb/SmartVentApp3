import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import RoomNoArrow from "../components/RoomNoArrow";
import RoomHeader from "../components/RoomHeader";

function ZoneDetail(props) {
  function getList() {
    let listItems = [];
    let listNames = Object.keys(props.house.zones[props.stateZone]);
    for (var i=0; i<props.house.numRooms; i++) {
      listItems.push (
        <RoomNoArrow name={listNames[i]} key={i} />
      )
    }
    return listItems;
  }

  return (
    <View style={styles.container}>
      <RoomHeader title={props.stateZone} setRoom={props.setZone} />
      <View style={styles.scrollArea}>
        <ScrollView>
          {getList()}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollArea: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
});

export default ZoneDetail;
