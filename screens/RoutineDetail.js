import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import RoomHeader from "../components/RoomHeader";
import TimeAndTemp from "../components/TimeAndTemp";

function RoutineDetail(props) {
  function getList() {
    let listItems = [];
    let listTimes = Object.keys(props.house.routines[props.stateRoutine]);
    for (var i=1; i<(props.house.routines[props.stateRoutine].numTimes+1); i++) {
      listItems.push (
        <TimeAndTemp 
          title={props.house.routines[props.stateRoutine][listTimes[i]]} 
          time={listTimes[i]} 
          key={i} 
        />
      )
    }
    return listItems;
  }

  return (
    <View style={styles.container}>
      <RoomHeader title={props.stateRoutine} setRoom={props.setRoutine} />
      <SafeAreaView style={styles.scrollArea}>
        <ScrollView>
          {getList()}
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
    backgroundColor: "#E6E6E6"
  },
});

export default RoutineDetail;
