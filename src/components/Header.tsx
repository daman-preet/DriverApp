import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

import RenderIcon from './RenderIcon';
import { commonColors, getScaledSize } from '../utils/constants';

interface HeaderProps {
  title: string;
  onSearch?: () => void;
  onCalendar?: () => void;
  selectSearch?: boolean;
}

const Header = ({ title, onSearch, onCalendar, selectSearch }: HeaderProps) => {
  const buttonProps = (isActive: boolean) => ({
    backgroundColor: isActive ? commonColors.green : commonColors.lightGrey,
    strokeColor: isActive ? commonColors.white : commonColors.black,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onSearch}
          style={[styles.button, { backgroundColor: buttonProps(selectSearch!).backgroundColor }]}
          accessibilityLabel="Search button"
        >
          <RenderIcon
            name="Search"
            size={getScaledSize(23)}
            color="none"
            pathProps={{
              stroke: buttonProps(selectSearch!).strokeColor,
              strokeWidth: 1.5,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onCalendar}
          style={[styles.button, { backgroundColor: buttonProps(!selectSearch!).backgroundColor }]}
          accessibilityLabel="Calendar button"
        >
          <RenderIcon
            name="Calendar"
            size={getScaledSize(25)}
            color="none"
            pathProps={{
              stroke: buttonProps(!selectSearch!).strokeColor,
              strokeWidth: 1.5,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: commonColors.white,
    marginBottom: getScaledSize(10),
    paddingHorizontal: getScaledSize(20),
  },
  title: {
    fontSize: getScaledSize(18),
    fontWeight: '700',
    color: commonColors.dark,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: getScaledSize(10),
  },
  button: {
    width: getScaledSize(38),
    height: getScaledSize(38),
    borderRadius: getScaledSize(38) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
