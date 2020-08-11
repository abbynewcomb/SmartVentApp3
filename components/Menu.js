import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

function Menu(props) {

  function changeScreen (str) { // changes the menu to closed and changes app state to required page
    props.setApp(str);
    props.setMenu(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => props.setMenu(false)}>
        <FeatherIcon name='x' style={styles.x} />
      </TouchableOpacity>
      <View style={styles.menuContainer} >
        <TouchableOpacity style={styles.button} onPress={() => changeScreen('Home')}>
          <View style={styles.iconcontainer}>
            <EntypoIcon name='home' style={styles.icon} />
          </View>
          <Text style={styles.text}>Home</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeScreen('Zones')}>
          <View style={styles.iconcontainer}>
            <FontAwesomeIcon name='thermometer-full' style={styles.icon} />
          </View>
          <Text style={styles.text}>Zones</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeScreen('Routines')}>
          <View style={styles.iconcontainer}>
            <FontAwesome5Icon name='calendar-alt' style={styles.icon} />
          </View>
          <Text style={styles.text}>Routines</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeScreen('Settings')}>
          <View style={styles.iconcontainer}>
            <IoniconsIcon name='md-settings' style={styles.icon} />
          </View>
          <Text style={styles.text}>Settings</Text>  
        </TouchableOpacity>
      </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    borderRightColor: 'white',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  menuContainer: {
    paddingTop: 20,
  },
  x: {
    color: 'white', 
    fontSize: 35, 
    paddingTop: 30
  },
  iconcontainer: {
    width: 27,
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
  text: {
    fontSize: 30,
    color: 'white',
    paddingLeft: 5,
  },
  button: {
    paddingLeft: 8,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
  
export default Menu;
