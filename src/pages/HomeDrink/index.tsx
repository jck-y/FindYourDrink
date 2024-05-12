import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Affocado, Americano, Capucino, Caramel, Homelogo, MiniCapucino, Notiflogo, Orderlogo } from '../../assets/icon';
import { Gap } from '../../components';

const HomeDrink = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.searchContainer}>
          <Text style={styles.headerText}>Find Your Drink</Text>
          <Gap height={20}/>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Coffee"
            placeholderTextColor="#8D73D6"
          />
        </View>
        <Gap height={58}/>
        <Text style={styles.categoryText}>COFFEE</Text>
        <Gap height={36}/>
        <View style={styles.drinkContainer}>
          <View style={styles.drinkItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
            <Image source={Capucino} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Cappucino</Text>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity>
            <Image source={Caramel} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Caramel Macchiato</Text>
          </View>
          <View style={styles.drinkItem}>
          <TouchableOpacity>
            <Image source={Affocado} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Affogato</Text>
          </View>
          <View style={styles.drinkItem}>
          <TouchableOpacity>
            <Image source={Americano} style={styles.drinkImage} />
            </TouchableOpacity>
            <Text style={styles.drinkText}>Americano</Text>
          </View>
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

export default HomeDrink;

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
  headerText: {
    color: '#725d8d',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign:'center',
    fontFamily:'RubikBubbles-Regular',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
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
    width: '50%', 
  },
  drinkImage: {
    width: 140,
    height: 140,
    marginBottom: 8,
    borderRadius:20,
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