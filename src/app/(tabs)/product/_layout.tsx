import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native';

function _layout() {
    return (
        <Stack screenOptions={{
            headerRight: () => (
                <Link href={'/cart'} asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="shopping-cart"
                                size={25}
                                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                </Link>
            )
        }}>
            <Stack.Screen name="index" options={{
                title: 'Menu',
            }} />
            <Stack.Screen name="[id]" options={{ title: 'Product Details' }} />
        </Stack>
    )
}

export default _layout
