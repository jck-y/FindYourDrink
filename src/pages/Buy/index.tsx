import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Capucino, Heart, Homelogo, MiniCapucino, Notiflogo, Orderlogo, Share } from '../../assets/icon';
import { Gap } from '../../components';

const Buy = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Gap height={46}/>
        <View style={styles.imageContainer}>
          <Image source={(Capucino)} style={styles.image} />
          <Text style={styles.title}>Cappuccino</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            A cappuccino is an approximately 180 ml (6 oz) beverage, with 25 ml of espresso and 85 ml of fresh milk.
          </Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>Size</Text>
          <View style={styles.sizeButtons}>
            <TouchableOpacity style={styles.sizeButton}>
              <Text style={styles.sizeButtonText}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeButton}>
              <Text style={styles.sizeButtonText}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeButton}>
              <Text style={styles.sizeButtonText}>L</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 14, color: '#8D73D6', marginLeft:10, fontWeight:'600'}}>Price</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Rp. 25.000</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

export default Buy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6C9E6',
  },
  scrollViewContainer: {
    paddingBottom: 60,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 344,
    height: 226,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8D73D6',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFC107',
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  descriptionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8D73D6',
    marginBottom: 8,
  },
  description: {
    color: '#8D73D6',
    lineHeight: 20,
  },
  sizeContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sizeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8D73D6',
    marginBottom: 8,
  },
  sizeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeButton: {
    backgroundColor: '#E0DCED',
    borderRadius: 20,
    width:108,
    height:43,
  },
  sizeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8D73D6',
    textAlign:"center",
    marginTop:10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#725d8d',
  },
  buyButton: {
    backgroundColor: '#725d8d',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 16,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
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