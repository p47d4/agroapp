import { View, Text, Button, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react';


import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}


const Home = ({ navigation } : RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Image style={styles.img} source={require('../../assets/image.png')} />

        {/* <Button title='Open details' onPress={() => navigation.navigate('details')} /> */}
        <Button title='Farmer' onPress={() => navigation.navigate('farmers')} />
        <Button title='Agrodealers' onPress={() => navigation.navigate('agrodealers')} />
        <Button title='Post Harvest Facility Manager' onPress={() => navigation.navigate('phfm')} />
        <Button title='Extension Worker' onPress={() => navigation.navigate('extensionworkers')} />
        <Button title='Logout' onPress={() => FIREBASE_AUTH.signOut()} />

        {/* <Pressable style={styles.button}>
            <Text style={styles.text}>Adnan</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Baba</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Ahmed</Text>
        </Pressable> */}

    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250,
        justifyContent : 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    
})

export default Home