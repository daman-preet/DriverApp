import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../utils/commonStyles';
import { commonColors } from '../utils/constants';
import TopTabNavigation from '../navigation/TopTabNavigation';
import Header from '../components/Header';
import { allTabs } from '../utils/data';

const AvailableBookings = () => {
  const [selectSearch, setSelectSearch] = useState<boolean>(true);

  const handleSearch = () => {
    setSelectSearch(true);
  };
  const handleCalendar = () => {
    setSelectSearch(false);
  };

  return (
    <SafeAreaView style={[commonStyles.safeAreaStyle, styles.container]}>
      <Header
        title="Available bookings"
        onCalendar={handleCalendar}
        onSearch={handleSearch}
        selectSearch={selectSearch}
      />
      <TopTabNavigation tabs={allTabs} />
    </SafeAreaView>
  );
};

export default AvailableBookings;

const styles = StyleSheet.create({
  container: { backgroundColor: commonColors.white },
});
