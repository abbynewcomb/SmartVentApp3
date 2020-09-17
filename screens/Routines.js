import React, { useState, Component } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import ListItem from "../components/ListItem";
import RoutineDetail from '../screens/RoutineDetail';

function Routines(props) {
  const[routineState,setRoutineState] = useState('');
  function getRoutines() {
    let listRoutines = [];
    let listNames = Object.keys(props.site.routines);
    for (var i=0; i<props.site.numRoutines; i++) {
      const str = new String(listNames[i]);
      listRoutines.push (
        <TouchableOpacity key={i} onPress={() => setRoutineState(str)}>
          <ListItem style={styles.temperature} title={listNames[i]} />
        </TouchableOpacity>
      )
    }
    return listRoutines;
  }

  if (routineState == ''){
    return (
      <View style={styles.container}>
        <MenuHeader title={'Routines'} setMenu={props.setMenu} stateMenu={props.stateMenu}  />
        <SafeAreaView style={styles.scrollArea}>
          <ScrollView>
            {getRoutines()}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  else {
    return (
      <RoutineDetail stateRoutine={routineState} setRoutine={setRoutineState} site={props.site} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Routines;
