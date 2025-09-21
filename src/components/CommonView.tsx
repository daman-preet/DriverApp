import React, { memo } from 'react';
import { Text, StyleSheet, ViewStyle, View } from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';

interface CommonViewProps {
  label: string;
  backgroundColor?: string;
  style?: ViewStyle;
  paddingHorizontal?: number;
}

const CommonView = ({
  label,
  backgroundColor = commonColors.dark,
  style,
  paddingHorizontal = 2,
}: CommonViewProps) => {
  return (
    <View
      style={[styles.commonView, { backgroundColor, paddingHorizontal }, style]}
    >
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commonView: {
    borderRadius: getScaledSize(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: getScaledSize(12),
    lineHeight: getScaledSize(26),
    fontWeight: 'bold',
    color: commonColors.white,
  },
});

export default memo(CommonView);
