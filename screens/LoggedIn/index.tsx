import React from 'react';
import { Icon } from 'react-native-elements';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CalendarScreen from '../Calendar';
import HomeScreen from '../Home';

const Drawer = createDrawerNavigator();

export default function LoggedIn() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
    </Drawer.Navigator>
  );
}
