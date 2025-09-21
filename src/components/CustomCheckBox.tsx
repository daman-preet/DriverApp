import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';

interface CustomCheckBoxProps {
  checked: boolean;
  onChange: () => void;
  style?: ViewStyle;
}

const CustomCheckBox = ({ checked, onChange, style }: CustomCheckBoxProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.box, checked && styles.boxChecked, style]}
      onPress={onChange}
    >
      {checked && <Text style={styles.tick}>✓</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: getScaledSize(24),
    height: getScaledSize(24),
    borderWidth: 1,
    borderColor: commonColors.mediumGrey,
    borderRadius: getScaledSize(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonColors.white,
  },
  boxChecked: {
    backgroundColor: commonColors.white,
    borderColor: commonColors.dark,
  },
  tick: {
    color: commonColors.dark,
    fontSize: getScaledSize(16),
    fontWeight: 'bold',
    lineHeight: getScaledSize(18),
  },
});

export default memo(CustomCheckBox);
