import { View, Text, StyleSheet, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';

const Agrodealers = () => {


    const [fullname, setFullname] = useState('');
    const [type, settype] = useState('');
    const [quantity, setquantity] = useState('');
    const [size, setsize] = useState('');

    function create() {

        //submit
        //
        // updateDoc(doc (FIREBASE_DB, "farmers", "FARM"), {
        // 
        // deleteDoc(doc(FIREBASE_DB, "farmers", "FARM"));

        addDoc(collection (FIREBASE_DB, "agrodealers"), {
           fullname: fullname, 
           type: type, 
           quantity: quantity, 
           size: size, 
        }).then(() => {

            //saved successfully
            console.log('Success');
            alert('Saved successfully');

        }).catch((error) => {
            console.log(error);
            alert('failed: ' + error.message);

        });
    }

  return (
    <View style={styles.container}>
        <ScrollView>
    <KeyboardAvoidingView behavior='padding'>


      <Image style={styles.img} source={require('../../assets/a.png')} />
      <Text style={styles.txt}>Agro Dealer</Text>


        <TextInput value={fullname} onChangeText={(fullname) => { setFullname(fullname)}} placeholder='Agro Dealers Fullname' style={styles.textBoxes}></TextInput>
        <TextInput value={type} onChangeText={(type) => { settype(type)}} placeholder='Type of Farm Input' style={styles.textBoxes}></TextInput>
        <TextInput value={quantity} onChangeText={(quantity) => { setquantity(quantity)}} placeholder='Quantity in stock at a time' style={styles.textBoxes}></TextInput>
        <TextInput value={size} onChangeText={(size) => { setsize(size)}} placeholder='Size of the store' style={styles.textBoxes}></TextInput>
        
        <Button onPress={create} title='Save Details'></Button>
        </KeyboardAvoidingView>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    textBoxes: {
        width: '80%',
        fontSize: 18,
        padding: 15,
        borderColor: 'green',
        borderWidth: 0.3,
        borderRadius: 10,
        backgroundColor : '#E5E4E2',
    },
    img: {
        width: 250,
        height: 250,
        justifyContent : 'center',
    },
    txt: {
        fontSize: 30,
        fontWeight: "bold",
        justifyContent : 'center',
    },
})


export default Agrodealers