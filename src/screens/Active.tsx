import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { commonColors, getScaledSize } from '../utils/constants';
import CardComponent from '../components/CardComponent';
import { myBookingList } from '../utils/data';
import EmptyContainer from '../components/EmptyContainer';

const Active = () => {
  const [bookingList] = useState(myBookingList);

  const renderItem = ({ item, index }: any) => {
    return <CardComponent data={item} detail={true} key={index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={bookingList || []}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
        ListEmptyComponent={
          <EmptyContainer emptyMessage={'No Booking Available'} />
        }
        style={styles.listStyle}
      />
    </View>
  );
};

export default Active;
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
