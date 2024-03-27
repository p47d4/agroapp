import { View, Text, StyleSheet, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';

const Extensionworker = () => {

    const [fullname, setFullname] = useState('');
    const [qualification, setQualification] = useState('');
    const [yearsofxp, setYOX] = useState('');
    const [aoc, setAoc] = useState('');
    const [type, setType] = useState('');

    function create() {

        //submit
        //
        // updateDoc(doc (FIREBASE_DB, "farmers", "FARM"), {
        // 
        // deleteDoc(doc(FIREBASE_DB, "farmers", "FARM"));

        addDoc(collection (FIREBASE_DB, "farmers"), {
           fullname: fullname, 
           qualification: qualification, 
           yearsofxp: yearsofxp, 
           aoc: aoc, 
           type: type, 
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


      <Image style={styles.img} source={require('../../assets/e.png')} />
      <Text style={styles.txt}>Extension Worker Details</Text>


        <TextInput value={fullname} onChangeText={(fullname) => { setFullname(fullname)}} placeholder='Farmers Fullname' style={styles.textBoxes}></TextInput>
        <TextInput value={qualification} onChangeText={(qualification) => { setQualification(qualification)}} placeholder='Qualification' style={styles.textBoxes}></TextInput>
        <TextInput value={yearsofxp} onChangeText={(yearsofxp) => { setYOX(yearsofxp)}} placeholder='Years Of Experience' style={styles.textBoxes}></TextInput>
        <TextInput value={aoc} onChangeText={(aoc) => { setAoc(aoc)}} placeholder='Area of Coverage' style={styles.textBoxes}></TextInput>
        <TextInput value={type} onChangeText={(type) => { setType(type)}} placeholder='Type of Extension Worker' style={styles.textBoxes}></TextInput>
        
        
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

export default Extensionworker