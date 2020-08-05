import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import RoomHeader from "../components/RoomHeader";
import Vent from "../components/Vent";

function RoomDetail(props) {
  function getVents() {
    let listVents = [];
    let listNames = Object.keys(props.house.rooms[props.stateRoom].vents);
    for (var i=0; i<props.house.rooms[props.stateRoom].numVents; i++) {
      listVents.push (
        <Vent title={listNames[i]} key={i} />
      )
    }
    return listVents;
  }

  return (
    <View style={styles.container}>
      <RoomHeader title={props.stateRoom} setRoom={props.setRoom} />
      <SafeAreaView style={styles.scrollArea}>
        <ScrollView>
          {getVents()}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
});

export default RoomDetail;
