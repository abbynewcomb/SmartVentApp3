import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import Zone from "../components/Zone";
import ZoneDetail from '../screens/ZoneDetail';

function Zones(props) {
  const[zoneState,setZoneState] = useState('');
  function getZones() {
    let listZones = [];
    let listNames = Object.keys(props.house.zones);
    for (var i=0; i<props.house.numZones; i++) {
      const str = new String(listNames[i]);
      listZones.push (
        <TouchableOpacity key={i} onPress={() => setZoneState(str)}>
          <Zone title={listNames[i]}/>
        </TouchableOpacity>
      )
    }
    return listZones;
  }

  if (zoneState == ''){
    return (
      <View style={styles.container}>
        <MenuHeader title={'Zones'} setMenu={props.setMenu} stateMenu={props.stateMenu} />
        <SafeAreaView style={styles.scrollArea}>
          <ScrollView>
            {getZones()}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
  
  else {
    return (
      <ZoneDetail stateZone={zoneState} setZone={setZoneState} house={props.house} />
    )
  }
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

export default Zones;
