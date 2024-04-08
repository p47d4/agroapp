import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'

const SocialButton = ({ onPress, icon }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}
    >
        <Image
            source={icon}
            resizeMode="contain"
            style={styles.icon}
        />
    </TouchableOpacity>
  )
}

    const styles = StyleSheet.create({
        container: {
            marginHorizontal: SIZES.padding
        },
        icon: {
            height: 52,
            width: 52,
        }
    })

export default SocialButton