import React, { memo, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import CommonView from './CommonView';
import { commonColors, getScaledSize } from '../utils/constants';

export interface DataProps {
  lastMinute: boolean;
  preferred: boolean;
  open: boolean;
  bookingDate: string;
  price: string;
  from: string;
  to: string;
  isAirport: boolean;
  timeTags: boolean;
}

export interface CardComponentProps {
  data: DataProps;
  detail?: boolean;
}

const getTimeTag = (bookingDate: string) => {
  const bookingMoment = moment(bookingDate);
  const hour = bookingMoment.hour();

  if (hour >= 22 || hour < 3) {
    return 'LATE NIGHT';
  } else if (hour >= 3 && hour < 7) {
    return 'EARLY MORNING';
  }
  return 'EARLY MORNING';
};

const CardComponent = ({ data, detail = false }: CardComponentProps) => {
  const navigation = useNavigation();

  const formattedDate = useMemo(
    () => moment(data.bookingDate).format('DD MMM, h:mm A (ddd)'),
    [data.bookingDate],
  );

  const timeTag = useMemo(
    () => getTimeTag(data.bookingDate),
    [data.bookingDate],
  );

  const showConfirmCard = useMemo(
    () => detail && (timeTag === 'EARLY MORNING' || timeTag === 'LATE NIGHT'),
    [detail, timeTag],
  );

  const isEarlyMorning = timeTag === 'EARLY MORNING';
  const messageText = isEarlyMorning
    ? 'Confirm your early morning booking anytime between:'
    : 'Come back to confirm your booking anytime between:';
  const timeWindow = isEarlyMorning
    ? '10:00 PM - 1:00 AM'
    : '3:30 PM - 7:30 PM';

  const handleNavigation = () => {
    //@ts-ignore
    navigation.navigate('Detail');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleNavigation}
      style={styles.card}
    >
      <View style={styles.tagsContainer}>
        {data.open && (
          <CommonView label="OPEN" backgroundColor={commonColors.green} />
        )}
        {data.lastMinute && (
          <CommonView label="LAST MINUTE" backgroundColor={commonColors.pink} />
        )}
        {data.preferred && (
          <CommonView
            label="PREFERRED"
            backgroundColor={commonColors.lightBlue}
          />
        )}
        {data.timeTags && (
          <View style={styles.tagsRow}>
            <CommonView label={timeTag} style={styles.commonView} />
            {data.isAirport && (
              <CommonView label="AIRPORT" style={styles.commonView} />
            )}
          </View>
        )}
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {formattedDate}
        </Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {data.price}
        </Text>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.commonText} numberOfLines={1} ellipsizeMode="tail">
          From: {data.from}
        </Text>
        <Text style={styles.commonText} numberOfLines={1} ellipsizeMode="tail">
          To: {data.to}
        </Text>
      </View>

      {showConfirmCard && (
        <View
          style={[
            styles.confirmCard,
            isEarlyMorning && { backgroundColor: commonColors.warning },
          ]}
        >
          <Text style={styles.confirmText}>
            {messageText} <Text style={styles.commonText}>{timeWindow}</Text>
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: commonColors.white,
    borderRadius: getScaledSize(12),
    padding: getScaledSize(16),
    shadowColor: commonColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  tagsContainer: {
    gap: getScaledSize(10),
  },
  tagsRow: {
    flexDirection: 'row',
    gap: getScaledSize(5),
    justifyContent: 'flex-end',
  },
  rowBetween: {
    paddingTop: getScaledSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  text: {
    fontSize: getScaledSize(16),
    lineHeight: getScaledSize(22),
    fontWeight: 'bold',
    color: commonColors.dark,
  },
  addressContainer: {
    paddingTop: getScaledSize(6),
    paddingBottom: getScaledSize(6),
  },
  commonText: {
    fontSize: getScaledSize(16),
    lineHeight: getScaledSize(26),
    fontWeight: '400',
    color: commonColors.dark,
  },
  commonView: {
    width: '50%',
  },
  confirmCard: {
    paddingVertical: getScaledSize(16),
    backgroundColor: commonColors.lightGrey,
    borderRadius: getScaledSize(10),
    paddingHorizontal: getScaledSize(20),
  },
  confirmText: {
    fontSize: getScaledSize(16),
    lineHeight: getScaledSize(22),
    fontWeight: 'bold',
    color: commonColors.dark,
    textAlign: 'left',
  },
});

export default memo(CardComponent);
