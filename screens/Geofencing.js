import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import DetailHeader from "../components/DetailHeader";
import Toolbar from "../components/Toolbar";
import MaterialMapView1 from "../components/MaterialMapView1";

function Geofencing(props) {
  const[switchValue,setSwitchValue] = useState(false);

  return (
    <View style={styles.container}>
      <DetailHeader title={'Geofencing'} returnTo={'Settings'} setApp={props.setApp} />
      <View style={styles.content}>
        <View style={styles.horiz}>
          <Text style={styles.text}>Use Geofencing</Text>
          <Switch value={switchValue} onValueChange={(b) => setSwitchValue(b)} />
        </View>
        <View style={styles.horiz}>
          <Text style={styles.text}>Distance</Text>
          <Text style={styles.text}>100 ft</Text>
        </View>
        <MaterialMapView1 style={styles.materialMapView1}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
  horiz: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    color: "black",
    fontSize: 25,
  },
  materialMapView1: {
    flex: 1,
  },
});

export default Geofencing;
