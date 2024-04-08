import { View, Text, StyleSheet, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig';


const Farmers = () => {

    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [nin, setNin] = useState('');
    const [farmsize, setFarmSize] = useState('');
    const [farmlocation, setFarmLocation] = useState('');
    const [gps, setGps] = useState('');
    const [crops, setCrops] = useState('');
    const [livestock, setLivestock] = useState('');
    const [fisheries, setFisheries] = useState('');
    const [farmersgroup, setFarmersGroup] = useState('');
    const [village, setVillage] = useState('');
    const [ward, setWard] = useState('');
    const [lga, setLga] = useState('');
    const [farmersaddress, setFarmersAddress] = useState('');
    const [nameofvillagehead, setNameOfVillageHead] = useState('');
    const [noofvillagehead, setNoOfVillageHead] = useState('');

    function create() {

        //submit
        //
        // updateDoc(doc (FIREBASE_DB, "farmers", "FARM"), {
        // 
        // deleteDoc(doc(FIREBASE_DB, "farmers", "FARM"));

        addDoc(collection (FIREBASE_DB, "farmers"), {
           fullname: fullname, 
           gender: gender, 
           phone: phone, 
           nin: nin, 
           farmsize: farmsize, 
           farmlocation: farmlocation, 
           gps: gps, 
           crops: crops, 
           livestock: livestock, 
           fisheries: fisheries, 
           farmersgroup: farmersgroup, 
           village: village, 
           ward: ward, 
           lga: lga, 
           farmersaddress: farmersaddress, 
           nameofvillagehead: nameofvillagehead, 
           noofvillagehead: noofvillagehead, 
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


      <Image style={styles.img} source={require('../../assets/f.png')} />
      <Text style={styles.txt}>Farmer</Text>


        <TextInput value={fullname} onChangeText={(fullname) => { setFullname(fullname)}} placeholder='Farmers Fullname' style={styles.textBoxes}></TextInput>
        <TextInput value={gender} onChangeText={(gender) => { setGender(gender)}} placeholder='Gender' style={styles.textBoxes}></TextInput>
        <TextInput value={phone} onChangeText={(phone) => { setPhone(phone)}} placeholder='Phone Number' style={styles.textBoxes}></TextInput>
        <TextInput value={nin} onChangeText={(nin) => { setNin(nin)}} placeholder='NIN Number' style={styles.textBoxes}></TextInput>
        <TextInput value={farmsize} onChangeText={(farmsize) => { setFarmSize(farmsize)}} placeholder='Farm Size' style={styles.textBoxes}></TextInput>
        <TextInput value={farmlocation} onChangeText={(farmlocation) => { setFarmLocation(farmlocation)}} placeholder='Farm Location' style={styles.textBoxes}></TextInput>
        <TextInput value={gps} onChangeText={(gps) => { setGps(gps)}} placeholder='GPS Coordinates' style={styles.textBoxes}></TextInput>
        <TextInput value={crops} onChangeText={(crops) => { setCrops(crops)}} placeholder='Crops (Specify)' style={styles.textBoxes}></TextInput>
        <TextInput value={livestock} onChangeText={(livestock) => { setLivestock(livestock)}} placeholder='Livestock (Specify)' style={styles.textBoxes}></TextInput>
        <TextInput value={fisheries} onChangeText={(fisheries) => { setFisheries(fisheries)}} placeholder='Fisheries & Aquaculture (Specify)' style={styles.textBoxes}></TextInput>
        <TextInput value={farmersgroup} onChangeText={(farmersgroup) => { setFarmersGroup(farmersgroup)}} placeholder='Fisheries & Aquaculture (Specify)' style={styles.textBoxes}></TextInput>
        <TextInput value={village} onChangeText={(village) => { setVillage(village)}} placeholder='Village/ Community' style={styles.textBoxes}></TextInput>
        <TextInput value={ward} onChangeText={(ward) => { setWard(ward)}} placeholder='Ward' style={styles.textBoxes}></TextInput>
        <TextInput value={lga} onChangeText={(lga) => { setLga(lga)}} placeholder='L.G.A' style={styles.textBoxes}></TextInput>
        <TextInput value={farmersaddress} onChangeText={(farmersaddress) => { setFarmersAddress(farmersaddress)}} placeholder='Farmers Home Address' style={styles.textBoxes}></TextInput>
        <TextInput value={nameofvillagehead} onChangeText={(nameofvillagehead) => { setNameOfVillageHead(nameofvillagehead)}} placeholder='Name Of Village Head' style={styles.textBoxes}></TextInput>
        <TextInput value={noofvillagehead} onChangeText={(noofvillagehead) => { setNoOfVillageHead(noofvillagehead)}} placeholder='Tel No. Of Village Head' style={styles.textBoxes}></TextInput>

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


export default Farmers