import { View, Text,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'


const DetailScreen = () => {
    const {params:{item}}=useRoute()
  return (
    <View>
      <Text style={styles.DetailScreen}>Name-{item.name}</Text>
      <Text style={styles.DetailScreen}>Gender-{item.gender}</Text>
      <Text style={styles.DetailScreen}>Email-{item.email }</Text>
      <Text style={styles.DetailScreen}>Status-{item.status}</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
  DetailScreen:{
    Flex: 1 ,
  fontSize:23,

  
  color:'white',
  backgroundColor:'lightblue'
  }
})
export default DetailScreen;