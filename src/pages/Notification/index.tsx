import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Homelogo, Notiflogo, Orderlogo } from '../../assets/icon';
import { Checkmark, Choices, Promo} from '../../assets/Logo/index';

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        <Text style={styles.headerText}>Notification</Text>
        <View style={styles.notificationItem}>
        <Image source={Checkmark} style={styles.checkIcon} />
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>Your order has been processed to pick up.</Text>
            <Text style={styles.notificationTime}>1 minute ago</Text>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notificationItem}>
        <Image source={Choices} style={styles.checkIcon} />
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>You have a new order to process.</Text>
            <Text style={styles.notificationTime}>15 minutes ago</Text>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notificationItem}>
        <Image source={Promo} style={styles.checkIcon} />
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>Special promo! Get 20% for purchasing drink today.</Text>
            <Text style={styles.notificationTime}>1 hour ago</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View style={styles.footerButton}>
              <Orderlogo width={-20} />
              <Text>Order</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.footerButton}>
              <Homelogo width={-20} />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <View style={styles.footerButton}>
              <Notiflogo width={-20} />
              <Text style={styles.addText}>Notification</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6C9E6',
  },
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8D73D6',
    marginBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
 checkIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8D73D6',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 14,
    color: '#8D73D6',
  },
  actionButton: {
    backgroundColor: '#8D73D6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    backgroundColor: '#eef3fc',
    borderTopWidth: 1,
    borderTopColor: '#ffff',
    elevation: 10,
    borderRadius: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  footerButton: {
    paddingHorizontal: 10,
  },
  addText: {
    fontSize: 14,
  },
});