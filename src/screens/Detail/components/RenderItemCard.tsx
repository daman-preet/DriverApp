import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CustomCheckBox from '../../../components/CustomCheckBox';
import { commonColors, getScaledSize } from '../../../utils/constants';
import RenderIcon from '../../../components/RenderIcon';

interface RenderItemCardProps {
  item: {
    id: string;
    label: string;
    value: string;
    icon?: string;
    field?: boolean;
  };
  isChecked: { [key: string]: boolean };
  toggleCheck: (field: string) => void;
}

const RenderItemCard = ({ item, isChecked, toggleCheck }: RenderItemCardProps) => {
  const isItemChecked = isChecked[item.id];
  return (
    <View style={styles.row}>
      <View style={styles.innerContainer}>
        {item.icon && (
          <RenderIcon
            name={item.icon}
            size={getScaledSize(20)}
            color={commonColors.green}
          />
        )}
        <View>
          <Text style={styles.itemlabel} numberOfLines={1} ellipsizeMode="tail">
            {item.label}
          </Text>
          <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
            {item.value}
          </Text>
        </View>
      </View>

      {item.field && (
        <CustomCheckBox
          checked={!!isItemChecked}
          onChange={() => toggleCheck(item.id)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: commonColors.greyStroke,
    paddingVertical: 1,
  },
  itemlabel: {
    fontSize: getScaledSize(14),
    lineHeight: getScaledSize(16),
    fontWeight: '400',
    color: commonColors.stone,
  },
  value: {
    fontSize: getScaledSize(16),
    lineHeight: getScaledSize(25),
    fontWeight: '400',
    color: commonColors.dark,
  },
});

export default memo(RenderItemCard);
