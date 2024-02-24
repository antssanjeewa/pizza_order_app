import { FontAwesome } from '@expo/vector-icons';
import { Stack } from 'expo-router'
import React from 'react'

function _layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'Menu',
                // headerLeft: () => (
                //     // <FontAwesome size={28} name='dashboard' style={{ marginBottom: -3 }} />
                // )
            }} />
            <Stack.Screen name="[id]" options={{ title: 'Product Details' }} />
        </Stack>
    )
}

export default _layout
