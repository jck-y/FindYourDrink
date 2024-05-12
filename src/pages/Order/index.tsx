import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import { Homelogo, MiniCapucino, Notiflogo, Orderlogo } from '../../assets/icon';
import { Gap } from '../../components';

const Order = ({ navigation }) => {
  const [isDelivery, setIsDelivery] = useState(true);

  return (
    <View style={styles.container}>
      <Gap height={50}/>
      <Text style={styles.categoryText}>ORDER</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[
              styles.navigationButton,
              isDelivery && styles.activeNavigationButton,
            ]}
            onPress={() => setIsDelivery(true)}
          >
            <Text style={isDelivery ? styles.activeNavigationText : styles.inactiveNavigationText}>Deliver</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navigationButton,
              !isDelivery && styles.activeNavigationButton,
            ]}
            onPress={() => setIsDelivery(false)}
          >
            <Text style={!isDelivery ? styles.activeNavigationText : styles.inactiveNavigationText}>Pick Up</Text>
          </TouchableOpacity>
        </View>
        <Gap height={24}/>
        <View style={styles.cardContainer}>
          <Image source={MiniCapucino} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Cappucino with Chocolate</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>1</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.paymentSummary}>
        <Text style={styles.paymentLabel}>Payment Summary</Text>
        <Gap height={30}/>
          <Text style={styles.paymentLabel}>Price</Text>
          <Text style={styles.paymentValue}>Rp. 25.000</Text>
          <Gap height={48}/>
          <Text style={styles.paymentLabel}>Total Payment</Text>
          <Text style={styles.paymentValue}>Rp. 25.000</Text>
          <Gap height={20}/>
          <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place Order</Text>
        </TouchableOpacity>
        </View>

      </ScrollView>
      {/* Footer navigation */}
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

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6C9E6',
    fontFamily: 'RubikBubbles-Regular',
  },
  scrollViewContainer: {
    paddingBottom: 60,
  },
  categoryText: {
    color: '#725d8d',
    fontSize: 40,
    fontWeight: '900',
    marginHorizontal: 16,
    marginVertical: 16,
    textAlign:'center',
    fontFamily:'RubikBubbles-Regular',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 67,
    backgroundColor:'white',
    marginHorizontal:25,
    borderRadius:10,
    height:49,
    width:365,
    alignItems: 'center',
  },
  navigationButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  activeNavigationButton: {
    backgroundColor: '#725d8d',
  },
  activeNavigationText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  inactiveNavigationText: {
    color: '#725d8d',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    fontFamily: 'RubikBubbles-Regular',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'RubikBubbles-Regular',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#725d8d',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  quantityButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
  discountContainer: {
    backgroundColor: '#E0DCED',
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
  },
  discountText: {
    color: '#725d8d',
    fontWeight: 'bold',
  },
  paymentSummary: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
  },
  paymentLabel: {
    fontSize: 16,
    color: 'black',
    fontWeight:'700',
    fontFamily: 'RubikBubbles-Regular',
  },
  paymentValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderButton: {
    backgroundColor: '#725d8d',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  orderButtonText: {
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