import { View, Text, StyleSheet, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';

const PHFM = () => {

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [condition, setcondition] = useState('');
    const [capacity, setcapacity] = useState('');
    const [address, setaddress] = useState('');
    const [geotag, setgeotag] = useState('');

    function create() {

        //submit
        //
        // updateDoc(doc (FIREBASE_DB, "farmers", "FARM"), {
        // 
        // deleteDoc(doc(FIREBASE_DB, "farmers", "FARM"));

        addDoc(collection (FIREBASE_DB, "phfm"), {
           type: type, 
           name: name, 
           age: age, 
           condition: condition, 
           capacity: capacity, 
           address: address, 
           geotag: geotag, 
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


      <Image style={styles.img} source={require('../../assets/p.png')} />
      <Text style={styles.txt}>Post Harvest Facility</Text>


        <TextInput value={type} onChangeText={(type) => { setType(type)}} placeholder='Type of Facility' style={styles.textBoxes}></TextInput>
        <TextInput value={name} onChangeText={(name) => { setName(name)}} placeholder='Name of facility' style={styles.textBoxes}></TextInput>
        <TextInput value={age} onChangeText={(age) => { setAge(age)}} placeholder='Age of facility' style={styles.textBoxes}></TextInput>
        <TextInput value={condition} onChangeText={(condition) => { setcondition(condition)}} placeholder='Condition of Facility' style={styles.textBoxes}></TextInput>
        <TextInput value={capacity} onChangeText={(capacity) => { setcapacity(capacity)}} placeholder='Capacity of Facility' style={styles.textBoxes}></TextInput>
        <TextInput value={address} onChangeText={(address) => { setaddress(address)}} placeholder='Address of Facility' style={styles.textBoxes}></TextInput>
        <TextInput value={geotag} onChangeText={(geotag) => { setgeotag(geotag)}} placeholder='Geotag ID of Facility' style={styles.textBoxes}></TextInput>
        
        
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

export default PHFM