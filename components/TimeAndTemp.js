import React from "react";
import { StyleSheet, View, Text, Picker } from "react-native";

function TimeAndTemp(props) {
  function getItems() {
    let listItems = [];
    let listNames = Object.keys(props.house.zones);
    for (var i=0; i<props.house.numZones; i++) {
      const str = new String(listNames[i]);
      listItems.push (
        <Picker.Item label={listNames[i]} value={listNames[i]} key={i} />
      )
    }
    return listItems;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{props.time}</Text>
      <Picker
        selectedValue={props.temp}
        style={styles.picker}
        itemStyle={[styles.pickerItem]} 
      >
        {getItems()}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#303030',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  time: {
    color: "#303030",
    fontSize: 28,
    paddingRight: 20,
    fontWeight: 'bold',
  },
  picker: {
    height: 100,
    width: '50%',
  },
  pickerItem: {
    color: 'gray',
    height: 100,
  },
});

export default TimeAndTemp;
