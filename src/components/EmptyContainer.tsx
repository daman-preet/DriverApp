import React, { memo } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';

interface EmptyProps {
  emptyMessage?: string;
  containerStyle?: ViewStyle;
}

const EmptyContainer = ({ emptyMessage = "No data available", containerStyle }: EmptyProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.emptyMessage}>{emptyMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyMessage: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: commonColors.dark,
    fontSize: getScaledSize(16),
  },
});

export default memo(EmptyContainer);
