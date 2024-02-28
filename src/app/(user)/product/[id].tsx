import { useCart } from '@/provider/cartProvider';
import { PizzaSize } from '@/types';
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useProduct } from '@/api/products';

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

function ProductDetails() {

    const { id } = useLocalSearchParams();
    const [selectedSize, setSelectedSize] = useState<PizzaSize>(sizes[0]);

    const { addItem } = useCart();

    const {
        data: product,
        isLoading,
        error,
    } = useProduct(parseInt(typeof id === 'string' ? id : id[0]));

    if (isLoading) {
        return <ActivityIndicator />;
    }
    if (error || !product) {
        return <Text>Failed to fetch product</Text>;
    }

    const addItemToCart = () => {
        addItem(product, selectedSize)
        router.push('/cart');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: product.image ?? '' }} />

            <Text style={styles.sizeLabel}>Select size</Text>
            <View style={styles.sizeContainer}>
                {sizes.map((size) => (
                    <TouchableOpacity style={[styles.sizeWrapper, {
                        backgroundColor: selectedSize == size ? '#ccc' : '#fff'
                    }]} key={size} onPress={() => setSelectedSize(size)}>
                        <Text style={[styles.sizeText, { color: selectedSize == size ? 'black' : 'gray' }]}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.priceText}>Price: ${product.price}</Text>

            <TouchableOpacity style={styles.btnContainer} onPress={addItemToCart}>
                <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },
    image: {
        width: "100%",
        aspectRatio: 1
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    sizeWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        aspectRatio: 1,
        borderRadius: 50
    },
    sizeText: {
        fontSize: 25,
        fontWeight: '500',
    },
    sizeLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceText: {
        marginTop: 'auto',
        fontWeight: 'bold',
        fontSize: 20
    },
    btnContainer: {
        width: "100%",
        marginTop: 20,
        backgroundColor: '#2f95dc',
        padding: 20,
        borderRadius: 25,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
