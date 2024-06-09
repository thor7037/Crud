import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../Constants/Images';
import { styles } from './style';
import Users from '../../Component/Flatlist/Users'
import { useDispatch, useSelector } from 'react-redux';
import { receiveApiData } from '../../Redux/Action/List.action';


const List = ({ navigation }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(receiveApiData());
    },[]);
    const { getList } = useSelector(state => state);


    console.log(getList, 'ggg')
    return (
        <View style={styles.MainContainer}>
            <View style={styles.Container}>
                <Text style={styles.addicon}>USERS</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Create', {item:'', editing:false})} >

                    <Image source={IMAGES.ADD}
                        style={styles.addicon} />

                </TouchableOpacity>


            </View>
           <Users data={getList} />
        </View>
    );
};

export default List;
