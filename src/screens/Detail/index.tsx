import { View, Text, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import React, { useState, useCallback, useMemo } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../utils/commonStyles';
import { commonColors, getScaledSize } from '../../utils/constants';
import CommonView from '../../components/CommonView';
import BackButton from '../../components/BackButton';
import RenderIcon from '../../components/RenderIcon';
import { bookingData } from '../../utils/data';
import Button from '../../components/Button';
import RenderItemCard from './components/RenderItemCard';

const Detail = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = useCallback((field: string) => {
    setIsChecked(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  }, []);

  const allChecked = useMemo(() => {
    return (
      bookingData.length > 0 && bookingData.every(item => isChecked[item.id])
    );
  }, [isChecked]);

  const handleAcceptBtn = () => {
    Alert.alert(
      'Success',
      'All items accepted successfully ✅',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ],
      { cancelable: false },
    );
  };

  const handleNoThanks = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[
        commonStyles.safeAreaStyle,
        { backgroundColor: commonColors.white },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <BackButton />
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {'12 Apr, 9:00 - '}
              <Text style={styles.type}>{'in 3h 40 min'}</Text>
            </Text>
            <Text style={styles.type}>booking {12345678}</Text>
          </View>
        </View>

        <ScrollView
          style={styles.innerContainer}
          showsVerticalScrollIndicator={false}
        >
          <CommonView
            label="OPEN"
            backgroundColor={commonColors.green}
            style={styles.openBtn}
          />

          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.text}>Price</Text>
              <Text style={styles.text}>{'$33.96'}</Text>
            </View>
            <Text style={styles.type}>{'GPU Ride'}</Text>

            <View style={styles.iconsRow}>
              <View style={styles.iconItem}>
                <Image
                  source={require('../../assets/passenger.png')}
                  style={styles.iconContainer}
                />
                <Text style={styles.iconText}>{'2'}</Text>
              </View>
              <View style={styles.iconItem}>
                <Image
                  source={require('../../assets/bag.png')}
                  style={styles.iconContainer}
                />
                <Text style={styles.iconText}>{'3'}</Text>
              </View>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                If you agree to accept this booking please mark checkboxes as
                read info
              </Text>
            </View>

            <View style={styles.containerCheckbox}>
              {bookingData.map((item: any) => (
                <RenderItemCard
                  key={item.id}
                  item={item}
                  isChecked={isChecked}
                  toggleCheck={toggleCheck}
                />
              ))}
              <View style={styles.row}>
                <View>
                  <Text style={styles.itemlabel}>{'Singboard'}</Text>
                  <Text style={styles.link}>{'DummyFile.pdf'}</Text>
                </View>
                <RenderIcon
                  name="Share"
                  color={commonColors.white}
                  size={getScaledSize(22)}
                  pathProps={{ stroke: 'black' }}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomCard}>
          <Button
            label="No thanks"
            style={styles.commonView}
            backgroundColor={commonColors.black}
            onPress={handleNoThanks}
          />
          <Button
            label="Accept"
            style={styles.commonView}
            backgroundColor={
              allChecked ? commonColors.lightBlue : commonColors.inactive
            }
            disabled={!allChecked}
            onPress={handleAcceptBtn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColors.white,
    gap: getScaledSize(10),
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getScaledSize(20),
    width: '100%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: getScaledSize(14),
    width: getScaledSize(14),
  },
  innerContainer: {
    flex: 1,
    paddingVertical: getScaledSize(10),
    paddingHorizontal: getScaledSize(20),
  },
  openBtn: {
    marginBottom: getScaledSize(10),
  },
  card: {
    gap: getScaledSize(10),
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: getScaledSize(6),
  },
  text: {
    fontSize: getScaledSize(16),
    fontWeight: 'bold',
    color: commonColors.dark,
  },
  type: {
    fontSize: getScaledSize(16),
    lineHeight: getScaledSize(24),
    color: commonColors.dark,
    fontWeight: '400',
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: getScaledSize(4),
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: getScaledSize(2),
  },
  iconText: {
    fontSize: getScaledSize(14),
    lineHeight: getScaledSize(20),
    color: commonColors.dark,
    fontWeight: '500',
  },
  infoBox: {
    backgroundColor: commonColors.neutral,
    paddingVertical: getScaledSize(16),
    paddingHorizontal: getScaledSize(20),
    shadowColor: commonColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 2.84,
    elevation: 4,
  },
  infoText: {
    fontSize: getScaledSize(16),
    lineHeight: getScaledSize(22),
    fontWeight: 'bold',
    color: commonColors.dark,
  },
  bottomCard: {
    flexDirection: 'row',
    gap: getScaledSize(5),
    padding: getScaledSize(11),
    alignItems: 'center',
    backgroundColor: commonColors.white,
  },
  commonView: {
    width: '50%',
    borderRadius: getScaledSize(4),
    paddingVertical: getScaledSize(14),
    paddingHorizontal: getScaledSize(24),
  },
  containerCheckbox: {
    gap: getScaledSize(10),
    paddingBottom: getScaledSize(10),
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
  link: {
    fontSize: getScaledSize(16),
    lineHeight: getScaledSize(25),
    fontWeight: '400',
    color: commonColors.lightBlue,
  },
});
