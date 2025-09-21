import React, { memo } from 'react';
import { Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';

interface CommonViewProps {
  label: string;
  backgroundColor?: string;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}

const Button = ({
  label,
  backgroundColor = commonColors.dark,
  style,
  onPress,
  disabled = false,
}: CommonViewProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.commonView, { backgroundColor }, style]}
      activeOpacity={0.9}
    >
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  commonView: {
    borderRadius: getScaledSize(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: getScaledSize(12),
    paddingHorizontal: getScaledSize(24),
  },
  text: {
    fontSize: getScaledSize(12),
    lineHeight: getScaledSize(26),
    fontWeight: 'bold',
    color: commonColors.white,
  },
});

export default memo(Button);
