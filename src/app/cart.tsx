import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, Platform, Text, View } from 'react-native'
import { useCart } from '../provider/cartProvider'
import CartListItem from '../components/cartListItem';


function Cart() {
    const { items } = useCart();

    return (
        <View>
            <FlatList data={items} renderItem={({ item }) =>
                <CartListItem item={item} />
            } />

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default Cart
