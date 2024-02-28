import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import ProductItem from '@components/ProductItem';
import { useProductList } from '@/app/api/products';


export default function MenuScreen() {

  const { data: products, isLoading, error } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

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
