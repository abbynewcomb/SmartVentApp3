import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import DetailHeader from "../components/DetailHeader";
import TimeAndTemp from "../components/TimeAndTemp";

function RoutineDetail(props) {
  function getList() {
    let listItems = [];
    let listTimes = Object.keys(props.site.routines[props.stateRoutine]);
    for (var i=1; i<(props.site.routines[props.stateRoutine].numTimes+1); i++) {
      listItems.push (
        <TimeAndTemp 
          temp={props.site.routines[props.stateRoutine][listTimes[i]]} 
          time={listTimes[i]} 
          key={i} 
          site={props.site}
        />
      )
    }
    return listItems;
  }

  return (
    <View style={styles.container}>
      <DetailHeader title={props.stateRoutine} setState={props.setRoutine} />
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
    flex: 1,
  },
  scrollArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default RoutineDetail;
