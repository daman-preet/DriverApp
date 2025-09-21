import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonColors, getScaledSize, WINDOW_HEIGHT } from '../utils/constants';
import AvailableBookings from '../screens/AvailableBookings';
import MyBookings from '../screens/MyBookings';
import Profile from '../screens/Profile';

const BottomTab = createBottomTabNavigator();

const BotttomTabNavigation = () => {
  const tabBarIcon = ({ focused, route }: any) => {
    let iconName = require('../assets/defaultProfile.png');
    let style;
    if (route.name === 'AvailableBookings') {
      iconName = require('../assets/defaultAvailable.png');
    } else if (route.name === 'MyBookings') {
      iconName = require('../assets/bookingIcon.png');
      style = {
        height: getScaledSize(28),
        width: getScaledSize(28),
      };
    }

    return (
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: focused ? commonColors.green : commonColors.white,
          },
        ]}
      >
        <Image
          source={iconName}
          style={[styles.image, route.name === 'MyBookings' && style]}
          tintColor={focused ? commonColors.white : commonColors.stone}
        />
      </View>
    );
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <BottomTab.Navigator
        initialRouteName="AvailableBookings"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => tabBarIcon({ focused, route }),
          tabBarActiveTintColor: commonColors.dark,
          tabBarInactiveTintColor: commonColors.dark,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarItemStyle: styles.tabBarItem,
        })}
      >
        <BottomTab.Screen
          name="AvailableBookings"
          component={AvailableBookings}
          options={{ tabBarLabel: 'Available' }}
        />
        <BottomTab.Screen
          name="MyBookings"
          component={MyBookings}
          options={{ tabBarLabel: 'My Bookings' }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: 'Profile' }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
};

export default BotttomTabNavigation;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: commonColors.black },
  tabBarStyle: {
    backgroundColor: commonColors.white,
    borderTopWidth: 1,
    borderTopColor: commonColors.lightGrey,
    position: 'absolute',
    bottom: 0,
    height: WINDOW_HEIGHT * 0.09,
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getScaledSize(20),
    height: WINDOW_HEIGHT * 0.1,
  },
  iconContainer: {
    height: getScaledSize(38),
    width: getScaledSize(38),
    marginBottom: getScaledSize(20),
    borderRadius: getScaledSize(38) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: getScaledSize(38),
    width: getScaledSize(38),
    resizeMode: 'contain',
    borderRadius: getScaledSize(38) / 2,
  },
  tabBarLabelStyle: {
    fontSize: getScaledSize(12),
    lineHeight: getScaledSize(16),
    fontWeight: '400',
  },
});
