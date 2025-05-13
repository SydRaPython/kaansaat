import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Touchable } from 'react-native';

export default function BrandProductsScreen({ route, navigation }) {
  const brandId = route?.params?.brandId;

  if (!brandId) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111827' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Marka bilgisi bulunamadı</Text>
      </View>
    );
  }

  const products = {
    Seiko: [
      {
        id: 'seiko_1',
        name: 'Seiko Presage Cocktail Time',
        price: '20.000.00 ₺',
        image: require('../assets/photo/seikopresage.png'),
      },
      {
        id: 'seiko_2',
        name: 'Seiko 5 SNXS75K',
        price: '12.945.00 ₺',
        image: require('../assets/photo/seikosnx.png'),
      },
      {
        id: 'seiko_3',
        name: 'Seiko Presage SPB417',
        price: '57.955,50 ₺',
        image: require('../assets/photo/seikopre.png'),
      },
    
    ],
    Casio: [
      {
        id: 'casio_1',
        name: 'Casio MTP-V005D-2B5',
        price: '2.500.50 ₺',
        image: require('../assets/photo/casio.png'),
      },
      {
        id: 'casio_2',
        name: 'Casio MTP-VD03G',
        price: '3.324.05 ₺',
        image: require('../assets/photo/casiomtp.png')
      },
      {
        id: 'casio_3',
        name: 'Casio MTP-VD03G-1A',
        price: '3.324.05 ₺',
        image: require('../assets/photo/casiogreen.png')
      }

    ],
    Sayki: [
    {
        id: 'sayki_1',
        name: 'Sayki Gentilhomme',
        price: '5.000.00 ₺',
        image: require('../assets/photo/sayki.png'),
    }
    ],
    Versace: [
      { 
        id: 'versace_1',
        name: 'Versace VEVK01021  ',
        price: '34.950.20 ₺',
        image: require('../assets/photo/versace.png')
      }
    ],
    Tissot: [
    {
      id: 'tissot_1',
      name: 'Tissot Gentleman PowerMatic 80',
      price: '39.400.50 ₺',
      image: require('../assets/photo/tissot.png')
    }
    ],
  };
  
  
const selectedProducts = products[brandId] || [];


const renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('ProductDetailScreen', { product: item });
    }}
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
  container: { flex: 1, backgroundColor: '#111827' },
  header: { fontSize: 32, fontWeight: 'bold', color: '#facc15', textAlign: 'center', marginVertical: 20 },
  list: { paddingHorizontal: 10 },
  card: { backgroundColor: '#1f2937', borderRadius: 10, padding: 15, marginBottom: 15, alignItems: 'center' },
  image: { width: 180, height: 180, resizeMode: 'contain', marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 20, fontWeight: '600', color: '#fff' },
  price: { fontSize: 16, color: '#9ca3af', marginBottom: 10 },
});
