import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Boba, Coffee, Milkshake, Juice, Notiflogo, Orderlogo, Homelogo } from '../../assets/icon';
import { Gap } from '../../components';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.searchContainer}>
          <Gap height={20}/>
        </View>
        <Gap height={58}/>
        <Text style={styles.categoryText}>MENU</Text>
        <Gap height={36}/>
        <View style={styles.drinkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DrinkDetail', { drinkType: 'Boba' })} style={styles.drinkItem}>
            <Image source={Boba} style={styles.drinkImage} />
            <Text style={styles.drinkText}>Boba</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DrinkDetail', { drinkType: 'Milkshake' })} style={styles.drinkItem}>
            <Image source={Milkshake} style={styles.drinkImage} />
            <Text style={styles.drinkText}>Milkshake</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomeDrink')} style={styles.drinkItem}>
            <Image source={Coffee} style={styles.drinkImage} />
            <Text style={styles.drinkText}>Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DrinkDetail', { drinkType: 'Juice' })} style={styles.drinkItem}>
            <Image source={Juice} style={styles.drinkImage} />
            <Text style={styles.drinkText}>Juice</Text>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6C9E6',
  },
  scrollViewContainer: {
    paddingBottom: 60,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
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
  drinkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  drinkItem: {
    alignItems: 'center',
    marginBottom: 16,
    width: '48%', // Adjusted width for better layout
  },
  drinkImage: {
    width: 140,
    height: 140,
    marginBottom: 8,
  },
  drinkText: {
    color: '#8D73D6',
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

