import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CartItem } from '../types'
import { useCart } from '@/provider/cartProvider';
import { FontAwesome } from '@expo/vector-icons';

type CartListItemProps = {
    item: CartItem;
};

const CartListItem = ({ item }: CartListItemProps) => {

    const { updateItem } = useCart();

    return (
        <View style={styles.container}>
            <Image style={styles.itemImage} source={{ uri: item.product.image ?? '' }} />

            <View style={styles.infoWrapper}>
                <Text style={styles.itemName}>{item.product.name}</Text>

                <View style={styles.detailsWrapper}>
                    <Text style={styles.itemPrice}>${item.product.price}</Text>
                    <Text>Size: {item.size}</Text>
                </View>
            </View>

            <View style={styles.countWrapper}>
                <TouchableOpacity onPress={() => updateItem(item.id, -1)}>
                    <FontAwesome name='minus' style={styles.actionIcon} />
                </TouchableOpacity>

                <Text style={styles.countText}>{item.quantity}</Text>

                <TouchableOpacity onPress={() => updateItem(item.id, 1)}>
                    <FontAwesome name='plus' style={styles.actionIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 5,
        borderRadius: 10
    },
    itemImage: {
        width: 50,
        aspectRatio: 1
    },

    infoWrapper: {
        marginLeft: 10,
    },

    detailsWrapper: {
        flexDirection: 'row'
    },

    itemName: {
        fontWeight: 'bold'
    },
    itemPrice: {
        color: 'blue',
        marginRight: 5
    },

    countWrapper: {
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center'
    },
    countText: {
        paddingHorizontal: 10
    },
    actionIcon: {
        padding: 10
    }
})
