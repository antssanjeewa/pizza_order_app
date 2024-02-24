import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, Text, View } from 'react-native'

function Cart() {
    return (
        <View>
            <Text>Cart</Text>

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default Cart
