import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import { Detailbutton } from '../../../assets/icon';
import { Gap } from '../../atoms';
const TransactionCard = ({Ordernum,tracknum,Date,quantity, total}) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Card.Title style={styles.cardtitle}>{Ordernum}</Card.Title>
          <Text>{tracknum}</Text>
          <Text>{quantity}</Text>
          <Text>{total}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.price}>{Date}</Text>
        </View>
      </View>
      <Gap height={16}/>
      <View style={styles.buttoncontent}>
        <Detailbutton/>
        <Text style={{marginLeft:150, fontSize:17, color:'black'}}>
          Status
        </Text>
      </View>
    </Card>
  );
}

export default TransactionCard

const styles = StyleSheet.create({
  cardtitle:{
    textAlign: "left",
    color: "black",
    fontSize: 16,
  },
  card:{
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  price: {
    textAlign: 'right',
  },
  buttoncontent:{
    flexDirection: 'row',
  },
  
})