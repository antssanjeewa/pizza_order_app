import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

function ProductDetails() {

    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}

export default ProductDetails
