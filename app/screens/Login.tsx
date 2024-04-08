// import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
// import React, { useState } from 'react';
// import { FIREBASE_AUTH } from '../../FirebaseConfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// const Login = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const auth = FIREBASE_AUTH

    

//     const signIn = async () => {
//         setLoading(true);
//         try {
//             const response = await  signInWithEmailAndPassword(auth, email, password);
//             console.log(response);
//             // alert('Check your email');
//         } catch (error : any) {
//             console.log(error);
//             alert('Sign In failed: ' + error.message);

//         } finally {
//             setLoading(false);
//         }
//     }

//     const signUp = async () => {
//         setLoading(true);
//         try {
//             const response = await  createUserWithEmailAndPassword(auth, email, password);
//             console.log(response);
//             alert('Check your email');
//         } catch (error : any) {
//             console.log(error);
//             alert('Sign Up failed: ' + error.message);

//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <View style={styles.container}>
//             <KeyboardAvoidingView behavior='padding'>
//             <Image style={styles.img} source={require('../../assets/image.png')} />

//             <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
//             <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
        
//             { loading ? (
//                 <ActivityIndicator size="large" color="#0000ff" />
//             ) : (
//                 <>
//                     <Button title='Login' onPress={signIn} />
//                     <Button title='Registration' onPress={signUp} />
//                 </> 
//             )}
//         </KeyboardAvoidingView>
//         </View>
//     );
// };

// export default Login;

// const styles = StyleSheet.create ({
//     container: {
//         marginHorizontal: 50,
//         flex : 1,
//         justifyContent : 'center',
//     },
//     input: {
//         marginVertical: 4,
//         height : 50,
//         borderWidth : 1,
//         borderRadius : 4,
//         padding : 1,
//         backgroundColor : '#fff',
//         paddingLeft: 5,
        
//     },
//     img: {
//         width: 300,
//         height: 300,
//         justifyContent : 'center',
//     },
//     TextInput: {
//         paddingBottom: 120,
//     },
//     Button: {
//         padding: 5,
//         paddingBottom: 10,
//     }
// })

// p2

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { COLORS, SIZES, FONTS, icons } from "../constants"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'

import { Checkbox } from 'expo-checkbox'
import SocialButton from '../components/SocialButton'
import * as Animatable from 'react-native-animatable';



const isTestMode = true;

const initialState = {
  inputValues: {
    email: isTestMode ? "example@gmail.com": "",
    password: isTestMode ? "********": "",
  },
  inputValidities : {
    email: false,
    password: false,
  },
  formIsValid: false
}

const Login = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const [isChecked, setChecked] = useState(false);

  const inputChangeHandler = useCallback((inputId, inputValue)=> {
    const result = validateInput(inputId, inputValue)
    dispatchFormState({ inputId, validationResult: result, inputValue })
  }, [dispatchFormState])



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(230,81,0,1)", "rgba(230,81,0,.8)"]}
        style={{ flex: 1 }}
      >
        <StatusBar hidden/>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Login</Text>
            <Text style={styles.subHeaderTitle}>Please Sign in to your existing Account</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}>
            <KeyboardAwareScrollView>
                
                <Text style={styles.inputHeader}>Email</Text>
                <Input
                    id="email"
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["email"]}
                    placeholder="example@gmail.com"
                    placeholderTextColor={COLORS.black}
                    keyboardType="email-address"
                />
                
                <Text style={styles.inputHeader}>Password</Text>
                <Input
                    id="password"
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["password"]}
                    placeholder="********"
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                
                <View style={styles.checkboxContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            color={isChecked ? COLORS.primary : undefined}
                            onValueChange={setChecked}
                        />

                        <Text style={{...FONTS.body4}}>
                            Remember Me?
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Verification")}
                    >
                        <Text
                            style={{
                                ...FONTS.body4,
                                color: COLORS.primary
                            }}
                        >Forgot Password</Text>
                    </TouchableOpacity>
                </View>

                <Button
                  title="Login"
                  isLoading={isLoading}
                  onPress={()=> navigation.navigate("Login")}
                />

                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                    <Text style={{ ...FONTS.body4, color: COLORS.black, textAlign: "center" }}>Or</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: SIZES.padding2
                }}>
                    <SocialButton 
                        onPress={()=> console.log("Implementing Google authentication")} 
                        icon={icons.google}
                    />
                    <SocialButton 
                        onPress={()=> console.log("Implementing X(Twitter) authentication")} 
                        icon={icons.twitter}
                    />
                    <SocialButton 
                        onPress={()=> console.log("Implementing Facebook authentication")} 
                        icon={icons.facebook}
                    />
                </View>

            </KeyboardAwareScrollView>
            
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  footer : {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 30,

  },
  headerTitle : {
        ...FONTS.h2,
        color: COLORS.white,
  },
  subHeaderTitle : {
        ...FONTS.h2,
        color: COLORS.white,
        marginVertical: SIZES.padding,
        textAlign: "center",
  },
  inputHeader : {
        ...FONTS.h2,
        textTransform: "uppercase",
        paddingVertical: 4,
  },
        checkboxContainer : {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 18,
    },
        checkbox : {
            marginRight: 8,
            height: 16,
            width: 16,
  },
        lineContainer : {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
        },
        line : {
            flex: 1,
            height: 1,
            backgroundColor: "gray",
        }
})

export default Login