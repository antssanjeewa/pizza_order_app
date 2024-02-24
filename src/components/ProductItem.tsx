import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Product } from "../types";
import { router } from 'expo-router';


type ProductItemProps = {
    item: Product
}

function ProductItem({ item }: ProductItemProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push(`/product/${item.id}`)}>
            <Image style={styles.image} source={{ uri: item.image ?? '' }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </TouchableOpacity>
    )
}

export default ProductItem


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        flex: 1
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20
    },
    price: {
        color: 'blue'
    },
})

