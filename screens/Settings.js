import React, { useState, Component } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import ListItem from "../components/ListItem";
import Geofencing from '../screens/Geofencing';

function Settings(props) {
  const[settingState,setSettingState] = useState('');

  if(settingState == ''){
    return (
      <View style={styles.container}>
        <MenuHeader title={'Settings'} setMenu={props.setMenu} stateMenu={props.stateMenu} />
        <SafeAreaView style={styles.scrollArea}>
          <ScrollView>
            <ListItem title={'Permissions'}/>
            <TouchableOpacity onPress={() => setSettingState('Geofencing')} >
              <ListItem title={'Geofencing'}/>
            </TouchableOpacity>
            <ListItem title={'Setpoints'}/>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
  
  else if(settingState == 'Geofencing'){
    return(
      <Geofencing setSetting={setSettingState} />
    );
  }
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

export default Settings;
