import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import Menu from './components/Menu';
import LogIn from './screens/LogIn';
import Home from './screens/Home';
import Routines from './screens/Routines';
import Zones from './screens/Zones';
import Settings from './screens/Settings';
import Geofencing from './screens/Geofencing';

var House = {
  numRooms: 8,
  rooms: {
    'Living Room': {
      temp: 70,
      numVents: 2,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        },
        'Vent above Couch': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Dining Room': {
      temp: 68,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Kitchen': {
      temp: 75,
      numVents: 2,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        },
        'Vent by Fridge': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Master Bedroom': {
      temp: 70,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Den': {
      temp: 72,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Kids\' Room': {
      temp: 68,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Office': {
      temp: 70,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Hallway': {
      temp: 70,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'open',
          battery: 100,
        }
      }
    },
  },
  numZones: 3,
  zones: {
    'Winter Day': {
      'Living Room': 72,
      'Dining Room': 70,
      'Kitchen': 68,
      'Master Bedroom': 70,
      'Den': 72,
      'Kids\' Room': 70,
      'Office': 72,
      'Hallway': 70,
    },
    'Winter Night': {
      'Living Room': 65,
      'Dining Room': 65,
      'Kitchen': 65,
      'Master Bedroom': 70,
      'Den': 70,
      'Kids\' Room': 72,
      'Office': 65,
      'Hallway': 65,
    },
    'Winter Away': {
      'Living Room': 65,
      'Dining Room': 65,
      'Kitchen': 65,
      'Master Bedroom': 65,
      'Den': 65,
      'Kids\' Room': 65,
      'Office': 65,
      'Hallway': 65,
    }
  },
  numRoutines: 3,
  routines: {
    'Winter Weekday': {
      numTimes: 5,
      '12:00 AM': 'Winter Night',
      '7:00 AM': 'Winter Day',
      '9:00 AM': 'Winter Away',
      '4:00 PM': 'Winter Day',
      '10:00 PM': 'Winter Night'
    },
    'Winter Weekend': {
      numTimes: 3,
      '12:00 AM': 'Winter Night',
      '8:30 AM': 'Winter Day',
      '10:00 PM': 'Winter Night'
    },
    'Winter Away': {
      numTimes: 1,
      '12:00 AM': 'Winter Away'
    }
  }
};

export default function App() {
  const[appState,setAppState] = useState('LogIn');
  const[menuState,setMenuState] = useState(false);

  if (appState == 'LogIn') {
    return (<LogIn setApp={setAppState} />)
  }

  if (appState == 'Home'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} /> } 
        isOpen={menuState}
      >
        <Home house={House} setApp={setAppState} setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
  }

  if (appState == 'Routines'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} /> } 
        isOpen={menuState}
      >
        <Routines house={House} setApp={setAppState} setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
  }

  if (appState == 'Zones'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} /> } 
        isOpen={menuState}
      >
        <Zones house={House} setApp={setAppState} setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
  }

  if (appState == 'Settings'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} /> } 
        isOpen={menuState}
      >
        <Settings setApp={setAppState} setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
  }
  if (appState == 'Geofencing'){
    return (<Geofencing setApp={setAppState} />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
