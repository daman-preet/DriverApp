import React, { memo, useRef, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';

export interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
}

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
  position,
}: CustomTabBarProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [tabLayouts, setTabLayouts] = useState<{
    [key: string]: { x: number; width: number };
  }>({});
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  useEffect(() => {
    if (scrollViewRef.current && state.routes.length > 0) {
      const activeTabKey = state.routes[state.index].key;
      const activeTabLayout = tabLayouts[activeTabKey];
      if (activeTabLayout) {
        const tabCenter = activeTabLayout.x + activeTabLayout.width / 2;
        const scrollToX = tabCenter - scrollViewWidth / 2;
        scrollViewRef.current.scrollTo({
          x: scrollToX,
          animated: true,
        });
      }
    }
  }, [state.index, tabLayouts, scrollViewWidth, state.routes]);

  const handleTabLayout = (event: LayoutChangeEvent, routeKey: string) => {
    const { x, width } = event.nativeEvent.layout;
    setTabLayouts(prev => ({
      ...prev,
      [routeKey]: { x, width },
    }));
  };

  const handleScrollViewLayout = (event: LayoutChangeEvent) => {
    setScrollViewWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.tabContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onLayout={handleScrollViewLayout}
      >
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : route.name;
          const isFocused = state.index === index;
          const inputRange = state.routes.map((_: any, i: any) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map((i: any) => (i === index ? 1 : 0.7)),
          });
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              activeOpacity={0.9}
              key={route.key}
              onPress={onPress}
              onLayout={event => handleTabLayout(event, route.key)}
              style={[
                styles.tab,
                isFocused ? styles.activeTab : styles.inactiveTab,
              ]}
            >
              <Animated.Text
                style={[
                  styles.tabLabel,
                  { opacity },
                  isFocused ? styles.activeText : styles.inactiveText,
                ]}
              >
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default memo(CustomTabBar);

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: commonColors.white,
    paddingVertical: getScaledSize(8),
  },
  scrollContent: {
    paddingHorizontal: getScaledSize(20),
    gap: getScaledSize(10),
  },
  tab: {
    paddingVertical: getScaledSize(10),
    paddingHorizontal: getScaledSize(30),
    borderRadius: getScaledSize(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: commonColors.green,
  },
  inactiveTab: {
    backgroundColor: commonColors.lightGrey,
  },
  tabLabel: {
    fontSize: getScaledSize(16),
    fontWeight: '400',
    lineHeight: getScaledSize(25),
  },
  activeText: {
    color: commonColors.white,
  },
  inactiveText: {
    color: commonColors.dark,
  },
});
