import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';
import CardComponent from '../components/CardComponent';
import { allBookingList } from '../utils/data';
import EmptyContainer from '../components/EmptyContainer';

const EarlyMorning = () => {
  const earlyMorningBookings = allBookingList.filter(
    item => item.isEarlyMorning === true,
  );

  const renderItem = ({ item }: any) => {
    return <CardComponent data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={earlyMorningBookings}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
        ListEmptyComponent={
          <EmptyContainer
            emptyMessage={'No Early Morning Bookings Available'}
          />
        }
        style={styles.listStyle}
      />
    </View>
  );
};

export default EarlyMorning;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  },
  listContentContainer: {
    gap: getScaledSize(15),
    paddingHorizontal: getScaledSize(20),
    paddingBottom: getScaledSize(80),
  },
  listStyle: { paddingTop: getScaledSize(10) },
});
