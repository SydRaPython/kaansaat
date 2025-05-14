import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { productsByBrand } from '../data/products'; // <--- burayı ekle

export default function BrandProductsScreen({ route, navigation }) {
  const brandId = route?.params?.brandId;
  const selectedProducts = productsByBrand[brandId] || [];

  if (!brandId) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Marka bilgisi bulunamadı</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={styles.card}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{brandId} Ürünleri</Text>
      <FlatList
        data={selectedProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#fff',
    fontSize: 18,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#facc15',
    textAlign: 'center',
    marginVertical: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  price: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 10,
  },
});
