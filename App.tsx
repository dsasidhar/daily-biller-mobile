import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, ThemeProvider } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoggedIn from './screens/LoggedIn';
import HeaderButton from './screens/LoggedIn/HeaderButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoggedIn">
          <Stack.Screen
            name="LoggedIn"
            options={({ navigation }) => ({
              title: "Daily Biller",
              headerLeft: () => <HeaderButton navigation={navigation} />
            })}
            component={LoggedIn}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
