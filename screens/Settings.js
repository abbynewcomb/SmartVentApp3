import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import Toolbar from "../components/Toolbar";
import Zone from "../components/Zone";

function Settings(props) {
  return (
    <View style={styles.container}>
      <MenuHeader title={'Settings'} setMenu={props.setMenu} stateMenu={props.stateMenu} />
      <SafeAreaView style={styles.scrollArea}>
        <ScrollView>
          <Zone style={styles.temperature} title={'Permissions'}/>
          <TouchableOpacity onPress={() => props.setApp('Geofencing')} >
            <Zone style={styles.temperature2} title={'Geofencing'}/>
          </TouchableOpacity>
          <Zone style={styles.temperature3} title={'Setpoints'}/>
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
    backgroundColor: "#E6E6E6",
  },
});

export default Settings;
