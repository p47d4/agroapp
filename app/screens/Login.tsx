import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH

    

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await  signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            // alert('Check your email');
        } catch (error : any) {
            console.log(error);
            alert('Sign In failed: ' + error.message);

        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await  createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your email');
        } catch (error : any) {
            console.log(error);
            alert('Sign Up failed: ' + error.message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
            <Image style={styles.img} source={require('../../assets/image.png')} />

            <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
        
            { loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <Button title='Login' onPress={signIn} />
                    <Button title='Registration' onPress={signUp} />
                </> 
            )}
        </KeyboardAvoidingView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create ({
    container: {
        marginHorizontal: 50,
        flex : 1,
        justifyContent : 'center',
    },
    input: {
        marginVertical: 4,
        height : 50,
        borderWidth : 1,
        borderRadius : 4,
        padding : 1,
        backgroundColor : '#fff',
        paddingLeft: 5,
        
    },
    img: {
        width: 300,
        height: 300,
        justifyContent : 'center',
    },
    TextInput: {
        paddingBottom: 120,
    },
    Button: {
        padding: 5,
        paddingBottom: 10,
    }
})
