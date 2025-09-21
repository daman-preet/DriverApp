import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomTabBar from './CustomTabBar';

const Tab = createMaterialTopTabNavigator();

export interface BookingTab {
  name: string;
  label: string;
  component: React.ComponentType<any>;
}
const TopTabNavigation = ({ tabs }: any) => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      {tabs.map((tab: BookingTab) => (
        <Tab.Screen
          key={tab?.name}
          name={tab?.name}
          component={tab?.component}
          options={{ tabBarLabel: tab.label }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
