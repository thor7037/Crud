import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { COLORS } from "../../Constants/Colors";
import { AddList,EditList } from "../../Redux/Action/List.action";
import List from "../../Screens/List";


const Create=({navigation})=> {
  const dispatch=useDispatch()

  const { params:{
    item,editing
  }}= useRoute();

  const [data,setData]= useState({...item})
  const onSubmit=()=>{
  const forum ={
    name:data.name,
    gender:data.gender,
    email:data.email,
    status:data.status,
  };
  editing === true ? dispatch(AddList(forum)) : dispatch(EditList(forum)) &&
navigation.navigate('List')
}
  const onChangeText = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });}





  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={data.name}
          onChangeText={e =>
            onChangeText('Name',  e)
          } 
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={data.gender}
          onChangeText={e =>
            onChangeText('Gender',  e)
          } 
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={data.email}
          onChangeText={e =>
            onChangeText('E-mail',  e)
          } 
        />
         <TextInput
          style={styles.input}
          placeholder="Status"
          value={data.status}
          onChangeText={e =>
            onChangeText('Status',  e)
          } 
        />
      </View>
      
      <Button 
      title="Save" 
      style={styles.Button}
      onPress={onSubmit} />
    </View>
  )
  
};
// const mapStateToProps =(state) => ({ user: state.user});

// const mapDispatchToProps = (dispatch) => ({
//   adduser:
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  inputContainer: {
    padding: 10,
    margin: 10,
    color:COLORS.blue
    
  },
  input: {
    borderBottomWidth:1,
    borderBottomColor: "blue",
    padding: 10,
    backgroundColor:COLORS.white,
    borderRadius:44
  },
  Button:{
    color:COLORS.blue
  }
});
export default Create;




// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// import React, {useState} from 'react';

// const isValidObjField = obj => {
//   return Object.values(obj).every(value => value.trim());
// };

// const updateError = (error, stateUpdater) => {
//   stateUpdater(error);
//   setTimeout(() => {
//     stateUpdater('');
//   }, 2500);
// };

// const isValidMail = value => {
//   const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return regx.test(value);
// };

// const SignUp = () => {
//   const [userInfo, setUserInfo] = useState({
//     fullName: '',
//     phoneNumber: '',
//     email: '',
//   });
//   const [error, setError] = useState('');

//   const {fullName, phoneNumber, email} = userInfo;

//   const handleOnChangeText = (value, fieldName) => {
//     setUserInfo({...userInfo, [fieldName]: value});
//   };

//   const isValidForm = () => {
//     if (!isValidObjField(userInfo)) {
//       return updateError('Required all fields!', setError);
//     }
//     if (!fullName.trim() || fullName.length < 3) {
//       return updateError('Invalid name!', setError);
//     }

//     if (!isValidMail(email)) {
//       return updateError('Invalid email!', setError);
//     }

    
//   };

//   const Submit = () => {
//     if (isValidForm()) {
//       console.log(userInfo);
//     }
//   };

//   return (
//     <View style={styles.Container}>
//       <View style={styles.Second}>
//         <Text style={styles.title}>Sign Up</Text>
//         <Text style={{color: 'gray'}}>
//           please fill in this form to create an account!
//         </Text>
//         {error ? (
//           <Text style={{fontSize: 18, textAlign: 'center', color: 'red'}}>
//             {error}
//           </Text>
//         ) : null}

//         <TextInput
//           style={styles.Name}
//           value={fullName}
//           onChangeText={value => handleOnChangeText(value, 'fullName')}
//           placeholder="Full Name"
//         />

//         <TextInput
//           style={styles.Input1}
//           value={phoneNumber}
//           onChangeText={value => handleOnChangeText(value, 'phoneNumber')}
//           placeholder="Phone Number"
//           keyboardType="numeric"
//         />

//         <TextInput
//           style={styles.Input1}
//           value={email}
//           onChangeText={value => handleOnChangeText(value, 'email')}
//           placeholder="Enter email"
//         />

      
//         <TouchableOpacity style={styles.button} onPress={Submit}>
//           <Text style={styles.Btext}>Submit</Text>
//         </TouchableOpacity>
//       </View>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'skyblue',
//   },
//   Second: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     width: '80%',
//     height: '60%',
//     alignItems: 'center',
//   },
//   Name: {
//     height: 40,
//     width: 230,
//     borderColor: 'lightgray',
//     borderWidth: 1,
//     fontSize: 15,
//     marginTop: 20,
//   },

//   title: {
//     paddingVertical: 10,
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   Input1: {
//     height: 40,
//     width: 230,
//     borderColor: 'lightgray',
//     borderWidth: 1,
//     fontSize: 15,
//     margin: 20,
//   },
//   Input2: {
//     height: 40,
//     width: 230,
//     borderColor: 'lightgray',
//     borderWidth: 1,
//     fontSize: 15,
//     margin: 20,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: 'skyblue',
//     padding: 10,
//     marginTop: 20,
//   },
//   Btext: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default SignUp;