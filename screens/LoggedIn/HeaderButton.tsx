import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { DrawerActions } from '@react-navigation/native';

export default function HeaderButton({ navigation }) {
  const onClick = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <Icon
      type="MaterialCommunityIcons"
      iconStyle={styles.headerButton}
      onPress={onClick}
      name="menu"
    />
  );
}

const styles = StyleSheet.create({
  headerButton: {
    fontSize: 20,
    color: "red",
    marginLeft: 15
  }
});
