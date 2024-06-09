import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";


import React, { useEffect } from "react";
import { Card, CardTitle } from "react-native-cards";

import { COLORS } from "../../Constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { DeleteList, receiveApiData } from "../../Redux/Action/List.action";
import { useNavigation } from "@react-navigation/native";
import IMAGES from "../../Constants/Images";

const Array = ({data}) => {
  console.log(data, 'DATAMAIn');
  const navigation = useNavigation();
  const dispatch=useDispatch();
  return (
    <FlatList
      numColumns={0}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item , index }) => (
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('DetailScreen',{item:item})}>
        <Card style={styles.Card}>
          <CardTitle title={item.name}
            style={styles.te}
          />      
        </Card>
        <TouchableOpacity
          onPress={() =>  dispatch(DeleteList(item.id))}
         >
         <Image source={IMAGES.ADD}
             style={styles.addicon} />
             </TouchableOpacity>
        </TouchableOpacity>

       

         <TouchableOpacity
         onPress={() => navigation.navigate('Create',{item: item, editing:true})} >

         <Image source={IMAGES.ADD}
             style={styles.addicon} />

     </TouchableOpacity>
     </View>

      )}
    />
  );
};

export default Array;


const styles = StyleSheet.create({
  Card: {
    borderRadius: 22,
    height: 64,
    backgroundColor: COLORS.white,
    shadowOpacity: 33,
    color: COLORS.white,
  
  },
  rightswipe: {
    fontSize: 20,
    top: 34,
    color: COLORS.white
  },

  te: {
    color: COLORS.blue
  }
});
