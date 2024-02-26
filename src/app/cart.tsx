import { StatusBar } from 'expo-status-bar'
import { Button, FlatList, Platform, Text, View } from 'react-native'
import { useCart } from '../provider/cartProvider'
import CartListItem from '@components/cartListItem';


const Cart = () => {
    const { items, total } = useCart();

    return (
        <View style={{ padding: 10 }}>
            <FlatList data={items} renderItem={({ item }) =>
                <CartListItem item={item} />
            } />

            <Text>Total : ${total}</Text>
            <Button title='Checkout' />

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default Cart
