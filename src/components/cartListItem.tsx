import { Image, StyleSheet, Text, View } from 'react-native'
import { CartItem } from '../types'

type CartListItemProps = {
    item: CartItem;
};

const CartListItem = ({ item }: CartListItemProps) => {

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
                <Text >-</Text>
                <Text style={styles.countText}>{item.quantity}</Text>
                <Text >+</Text>
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
        marginLeft: 'auto'
    },
    countText: {
        paddingHorizontal: 10
    }
})
