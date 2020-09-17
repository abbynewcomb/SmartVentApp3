updated look from Holly

************************************* Files *************************************

** Components - where used and props required

Menu - the view displayed by the SideMenu component in App.js
props: setApp (function to change app state) and setMenu (function to change menu state)

MenuHeader - the header that displays a menu button along with a title, used in any screen immediately off the menu
props: title, setMenu (function to change menu state), menuState (current state of menu)

DetailHeader - the header that displays a return arrow along with a title, used in any detail screen
props: title, setState (state to change to empty string once return arrow is pressed in order to return to main screen)

Room - name of room followed by temp w/ change arrows, used in Home and ZoneDetail
props: name, temp (both strings, should not include degree sign)

TimeAndTemp - used on the RoutineDetail screen 
props: time, temp, site variable (in order to get number of zones)

Vent                                                    /// not currently used
props: title 

ListItem - used for any list component showing text followed by an arrow to another screen (Zones, Routines, Settings)
props: title

MaterialMapView1 - used in the Geofencing screen
props: none


** Screens

Login - default screen when app is opened, added in App.js

Home - lists rooms and temps, added in App.js

Zones - lists zones, added in App.js

Routines - lists routines, added in App.js

Settings - lists settings, added in App.js

RoomDetail - tells temp of room and vents, added in Home

ZoneDetail - tells temps of each room in zone, added in Zones

RoutineDetail - tells times / zones of routine, added in Routines

Geofencing - shows geofencing settings and map, added in Settings


** App.js - adds all screens off menu and House variable, which holds info for entire app



********************************* State Variables *********************************


