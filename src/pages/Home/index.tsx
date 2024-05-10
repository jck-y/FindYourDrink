import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
import { Homelogo, Notiflogo, Orderlogo } from '../../assets/icon';

  const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        
        <Text>Home</Text>
        {/* code disni */}
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
      backgroundColor: '#ffff',
    },
    scrollViewContainer: {
      paddingBottom: 60,
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
  