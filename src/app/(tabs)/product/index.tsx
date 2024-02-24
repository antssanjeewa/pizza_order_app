import { FlatList, StyleSheet, View } from 'react-native';

import products from '@/assets/data/products';
import ProductItem from '@/components/ProductItem';


export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) =>
          <ProductItem item={item} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
