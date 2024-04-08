import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { COLORS, SIZES, FONTS } from "../constants"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Input from '../components/Input'
import Button from '../components/Button'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import * as Animatable from 'react-native-animatable';


const isTestMode = true;

const initialState = {
  inputValues: {
    fullName: isTestMode ? "Bola Ahmed": "",
    email: isTestMode ? "example@gmail.com": "",
    phone: isTestMode ? "080123456789": "",
    voterid: isTestMode ? "901H DFK0 9340 3403 9486": "",
    password: isTestMode ? "********": "",
    confirmPassword: isTestMode ? "********": ""
  },
  inputValidities : {
    fullName: false,
    email: false,
    phone: false,
    voterid: false,
    password: false,
    confirmPassword: false,
  },
  formIsValid: false
}

const Register = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

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
            <Text style={styles.headerTitle}>Register</Text>
            <Text style={styles.subHeaderTitle}>Please Register to create a new Account</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
          style={styles.footer}>
            <KeyboardAwareScrollView>
                <Text style={styles.inputHeader}>Full Name</Text>
                <Input
                    id="fullName"
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["fullName"]}
                    placeholder="Bola Ahmed"
                    placeholderTextColor={COLORS.black}
                />
                <Text style={styles.inputHeader}>Email</Text>
                <Input
                    id="email"
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["email"]}
                    placeholder="example@gmail.com"
                    placeholderTextColor={COLORS.black}
                    keyboardType="email-address"
                />
                <Text style={styles.inputHeader}>Phone Number</Text>
                <Input
                    id="phone"
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["phone"]}
                    placeholder="080123456789"
                    placeholderTextColor={COLORS.black}
                />
                <Text style={styles.inputHeader}>INEC Voter ID</Text>
                <Input
                    id="voterid"
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["voterid"]}
                    placeholder="901H DFK0 9340 3403 9486"
                    placeholderTextColor={COLORS.black}
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
                <Text style={styles.inputHeader}>Confirm Password</Text> 
                <Input
                    id="confirmPassword"
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["confirmPassword"]}
                    placeholder="*********"
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <Button
                  title="SIGN UP"
                  isLoading={isLoading}
                  onPress={()=> navigation.navigate("Login")}
                />
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
  }
})

export default Register