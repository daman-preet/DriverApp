import React, { memo, useCallback } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import RenderIcon from './RenderIcon';
import { commonColors, getScaledSize } from '../utils/constants';

const BackButton = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={goBack}
      activeOpacity={0.9}
    >
      <RenderIcon
        name="Back"
        size={getScaledSize(18)}
        color={'none'}
        pathProps={{
          stroke: commonColors.dark,
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getScaledSize(32),
    height: getScaledSize(32),
    borderRadius: getScaledSize(32) / 2,
    backgroundColor: commonColors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(BackButton);
