import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import MenuHeader from "../components/MenuHeader";
import Room from "../components/Room";
import RoomDetail from '../screens/RoomDetail';

function Home(props) {
  const[roomState,setRoomState] = useState('');
  function getRooms() {
    let listRooms = [];
    let listNames = Object.keys(props.house.rooms);
    for (var i=0; i<props.house.numRooms; i++) {
      const str = new String(listNames[i]);
      listRooms.push (
        <TouchableOpacity key={i} onPress={() => setRoomState(str)}>
          <Room name={listNames[i]}/>
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
      <RoomDetail stateRoom={roomState} setRoom={setRoomState} house={props.house} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    top: 11,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  toolbar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 56
  },
  scrollArea: { 
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
});

export default Home;
