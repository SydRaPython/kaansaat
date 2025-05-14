import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  

export default function PurchaseScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ödeme Seçenekleri</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Fiyat: {product.price}</Text>
      <Image source={product.image} style={styles.image} />

      <View style={styles.cardContainer}>
        <TouchableOpacity 
          style={styles.cardOption}
          onPress={() => navigation.navigate('CreditCardForm', { product })}
        >
        <Ionicons name="card" size={32} color="white" />
          <Text style={styles.cardOptionText}>Kredi Kartı</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardOption}
        onPress={() => navigation.navigate('PayAtHome', { product })}
        >
          <Ionicons name="cash" size={32} color="white" />
          <Text style={styles.cardOptionText}>Kapıda Ödeme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#111827' 
  },
  title: { 
    fontSize: 24, 
    color: '#facc15', 
    bottom: -100 
  },
  name: { 
    fontSize: 18, 
    color: 'white', 
    bottom: 200 
  },
  price: { 
    fontSize: 16, 
    color: 'white', 
    marginTop: 8, 
    backgroundColor: '#1b2438' 
  },
  image: { 
    width: 140, 
    height: 140, 
    resizeMode: 'contain', 
    marginBottom: 8, 
    borderRadius: 8, 
    bottom: 200 
  },
  cardContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    width: '100%', 
    position: 'absolute', 
    bottom: 30, 
    paddingHorizontal: 20 
  },
  cardOption: { 
    backgroundColor: '#1b2438', 
    padding: 10, 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row',
    bottom: 230
  },
  cardOptionText: { 
    color: 'white', 
    marginLeft: 8, 
    fontSize: 14 
  }
});
