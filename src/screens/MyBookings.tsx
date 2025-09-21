import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../utils/commonStyles';
import { commonColors } from '../utils/constants';
import Header from '../components/Header';
import TopTabNavigation from '../navigation/TopTabNavigation';
import { myBookingAllTabs } from '../utils/data';

const MyBookings = () => {
  return (
    <SafeAreaView style={[commonStyles.safeAreaStyle, styles.container]}>
      <Header title="My bookings" />
      <TopTabNavigation tabs={myBookingAllTabs} />
    </SafeAreaView>
  );
};

export default MyBookings;
const styles = StyleSheet.create({
  container: { backgroundColor: commonColors.white },
});
