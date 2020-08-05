import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import Zone from "../components/Zone";
import RoutineDetail from '../screens/RoutineDetail';

function Routines(props) {
  const[routineState,setRoutineState] = useState('');
  function getRoutines() {
    let listRoutines = [];
    let listNames = Object.keys(props.house.routines);
    for (var i=0; i<props.house.numRoutines; i++) {
      const str = new String(listNames[i]);
      listRoutines.push (
        <TouchableOpacity key={i} onPress={() => setRoutineState(str)}>
          <Zone style={styles.temperature} title={listNames[i]} />
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
      <RoutineDetail stateRoutine={routineState} setRoutine={setRoutineState} house={props.house} />
    );
  }
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

export default Routines;
