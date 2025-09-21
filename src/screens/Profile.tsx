import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonColors, getScaledSize } from '../utils/constants';
import { commonStyles } from '../utils/commonStyles';
import { user } from '../utils/data';

const Profile = () => {
  return (
    <SafeAreaView style={commonStyles.safeAreaStyle}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: user.profilePic }} style={styles.avatar} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.info}>{user.email}</Text>
          <Text style={styles.info}>{user.phone}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.logoutButton]}>
            <Text style={[styles.buttonText, { color: commonColors.black }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
    padding: getScaledSize(20),
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: getScaledSize(40),
    marginBottom: getScaledSize(20),
  },
  avatar: {
    width: getScaledSize(120),
    height: getScaledSize(120),
    borderRadius: getScaledSize(60),
    borderWidth: 2,
    borderColor: commonColors.green,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: getScaledSize(30),
  },
  name: {
    fontSize: getScaledSize(20),
    fontWeight: '600',
    color: commonColors.dark,
    marginBottom: getScaledSize(8),
  },
  info: {
    fontSize: getScaledSize(14),
    color: commonColors.stone,
    marginBottom: getScaledSize(4),
  },
  actionsContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: commonColors.green,
    paddingVertical: getScaledSize(12),
    borderRadius: getScaledSize(8),
    marginBottom: getScaledSize(15),
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: commonColors.white,
    borderWidth: 1,
    borderColor: commonColors.dark,
  },
  buttonText: {
    fontSize: getScaledSize(16),
    fontWeight: '500',
    color: commonColors.white,
  },
});

export default Profile;
