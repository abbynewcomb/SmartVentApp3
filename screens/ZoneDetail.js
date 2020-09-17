import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Room from "../components/Room";
import DetailHeader from "../components/DetailHeader";

function ZoneDetail(props) {
  function getList() {
    let listItems = [];
    let listNames = Object.keys(props.site.zones[props.stateZone]);
    for (var i=0; i<props.site.numRooms; i++) {
      const str = new String(props.site.zones[props.stateZone][listNames[i]]);
      listItems.push (
        <Room name={listNames[i]} temp={str} key={i} />
      )
    }
    return listItems;
  }

  return (
    <View style={styles.container}>
      <DetailHeader title={props.stateZone} setState={props.setZone} />
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
    backgroundColor: 'white',
  },
});

export default ZoneDetail;
