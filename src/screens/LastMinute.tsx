import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';
import CardComponent from '../components/CardComponent';
import { allBookingList } from '../utils/data';
import EmptyContainer from '../components/EmptyContainer';

const LastMinute = () => {
  const lastMinuteBookings = allBookingList.filter(
    item => item.lastMinute === true,
  );

  const renderItem = ({ item }: any) => {
    return <CardComponent data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={lastMinuteBookings}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
        ListEmptyComponent={
          <EmptyContainer emptyMessage={'No Last Minute Bookings Available'} />
        }
        style={styles.listStyle}
      />
    </View>
  );
};

export default LastMinute;

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
