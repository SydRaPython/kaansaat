// screens/HomeScreen.js
import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import { allProducts } from '../data/products';

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.onecikan}>Öne Çıkanlar</Text>
      <FlatList
        data={allProducts}                   // allProducts kullanılıyor
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.list, { paddingBottom: 40 }]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#111827', 
    paddingTop: 16, 
    paddingHorizontal: 16 
  },
  list: { paddingTop: 10 },
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: 260,
    alignSelf: 'center',
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  onecikan: {
    color: '#facc15',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
});
