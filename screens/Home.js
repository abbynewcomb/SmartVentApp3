import React, { useState, Component } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import Room from "../components/Room";
import RoomDetail from '../screens/RoomDetail';

function Home(props) {
  const[roomState,setRoomState] = useState('');
  function getRooms() { // dynamically lists rooms
    let listRooms = [];
    let listNames = Object.keys(props.site.rooms);
    for (var i=0; i<props.site.numRooms; i++) {
      const str = new String(listNames[i]);
      const str2 = new String(props.site.rooms[listNames[i]].temp);
      listRooms.push (
        <TouchableOpacity key={i} onPress={() => setRoomState(str)}>
          <Room name={listNames[i]} temp={str2} />
        </TouchableOpacity>
      )
    }
    return listRooms;
  }

  if (roomState == ''){
    return (
      <View style={styles.container}>
        <MenuHeader title={'Home'} setMenu={props.setMenu} stateMenu={props.stateMenu} />
        <SafeAreaView style={styles.scrollArea}>
          <ScrollView>
            {getRooms()}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
  
  else {
    return (
      <RoomDetail stateRoom={roomState} setRoom={setRoomState} site={props.site} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: { 
    flex: 1,
    backgroundColor: "white",
  },
});

export default Home;
