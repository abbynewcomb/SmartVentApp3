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
          status: 'closed',
          battery: 100,
        },
        'Vent by Fridge': {
          status: 'closed',
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
          status: 'closed',
          battery: 100,
        }
      }
    },
    'Kids\' Room': {
      temp: 68,
      numVents: 1,
      vents: {
        'Vent by Closet': {
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

var Studio = {
  numRooms: 4,
  rooms: {
    'Lobby': {
      temp: 68,
      numVents: 4,
      vents: {
        'Vent by Reception': {
          status: 'open',
          battery: 100,
        },
        'Vent above Couch': {
          status: 'open',
          battery: 100,
        },
        'Vent below Window': {
          status: 'open',
          battery: 100,
        },
        'Vent by Door': {
          status: 'open',
          battery: 100,
        }
      }
    },
    'Patient Room 1': {
      temp: 75,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'closed',
          battery: 100,
        }
      }
    },
    'Patient Room 2': {
      temp: 73,
      numVents: 1,
      vents: {
        'Vent by Window': {
          status: 'closed',
          battery: 100,
        },
      }
    },
    'Back Office': {
      temp: 70,
      numVents: 1,
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
    }
  },
  numZones: 3,
  zones: {
    'Open': {
      'Lobby': 68,
      'Patient Room 1': 73,
      'Patient Room 2': 73,
      'Back Office': 70,
    },
    'Summer Closed': {
      'Lobby': 75,
      'Patient Room 1': 75,
      'Patient Room 2': 75,
      'Back Office': 75
    },
    'Winter Closed': {
      'Lobby': 60,
      'Patient Room 1': 60,
      'Patient Room 2': 60,
      'Back Office': 60
    }
  },
  numRoutines: 4,
  routines: {
    'Winter Weekday': {
      numTimes: 3,
      '12:00 AM': 'Winter Closed',
      '8:00 AM': 'Open',
      '8:00 PM': 'Winter Closed'
    },
    'Summer Weekday': {
      numTimes: 3,
      '12:00 AM': 'Summer Closed',
      '8:00 AM': 'Open',
      '8:00 PM': 'Summer Closed'
    },
    'Winter Closed': {
      numTimes: 1,
      '12:00 AM': 'Winter Closed'
    },
    'Summer Closed': {
      numTimes: 1,
      '12:00 AM': 'Summer Closed'
    }
  }
};

export default function App() {
  const[appState,setAppState] = useState('LogIn');
  const[menuState,setMenuState] = useState(false);
  const[siteState,setSiteState] = useState(House);
  const[siteStrState,setSiteStrState] = useState('House');

  function changeSite() {
    if (siteStrState == 'House') {
      setSiteState(House)
    } else if (siteStrState == 'Studio') {
      setSiteState(Studio)
    }
  }

  if (appState == 'LogIn') {
    return (<LogIn setApp={setAppState} />)
  }

  if (appState == 'Home'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} stateSiteStr={siteStrState} setSiteStr={setSiteStrState} /> } 
        isOpen={menuState}
      >
        <Home site={siteState} setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
  }

  if (appState == 'Routines'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} stateSite={siteState} setSite={setSiteState} /> } 
        isOpen={menuState}
      >
        <Routines site={siteState} setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
  }

  if (appState == 'Zones'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} stateSite={siteState} setSite={setSiteState} /> } 
        isOpen={menuState}
      >
        <Zones site={siteState} setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
  }

  if (appState == 'Settings'){
    return (
      <SideMenu 
        menu={<Menu setApp={setAppState} setMenu={setMenuState} stateSite={siteState} setSite={setSiteState} /> } 
        isOpen={menuState}
      >
        <Settings setMenu={setMenuState} stateMenu={menuState} />
      </SideMenu>
    );
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
