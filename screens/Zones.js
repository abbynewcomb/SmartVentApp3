import React, { useState, Component } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import ListItem from "../components/ListItem";
import ZoneDetail from '../screens/ZoneDetail';

function Zones(props) {
  const[zoneState,setZoneState] = useState('');
  function getZones() {
    let listZones = [];
    let listNames = Object.keys(props.site.zones);
    for (var i=0; i<props.site.numZones; i++) {
      const str = new String(listNames[i]);
      listZones.push (
        <TouchableOpacity key={i} onPress={() => setZoneState(str)}>
          <ListItem title={listNames[i]}/>
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
      <ZoneDetail stateZone={zoneState} setZone={setZoneState} site={props.site} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollArea: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Zones;
