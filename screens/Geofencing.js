import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import DetailHeader from "../components/DetailHeader";
import MaterialMapView1 from "../components/MaterialMapView1";

function Geofencing(props) {
  const[switchValue,setSwitchValue] = useState(true);

  return (
    <View style={styles.container}>
      <DetailHeader title={'Geofencing'} setState={props.setSetting} />
      <View style={styles.content}>
        <View style={styles.rect}>
          <Text style={styles.text}>Use Geofencing</Text>
          <Switch value={switchValue} onValueChange={(b) => setSwitchValue(b)} />
        </View>
        <View style={styles.rect}>
          <Text style={styles.text}>Distance</Text>
          <Text style={styles.bold}>100 ft</Text>
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
    backgroundColor: "white",
  },
  rect: {
    height: 100,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#303030',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 32,
    color: '#303030',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingRight: 20,
  },
  bold: {
    fontSize: 32,
    color: '#303030',
    fontWeight: 'bold'
  },
  materialMapView1: {
    flex: 1,
  },
});

export default Geofencing;
