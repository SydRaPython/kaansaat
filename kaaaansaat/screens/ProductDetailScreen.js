import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // Favorilere eklenmiş ürünleri kontrol et
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
          const parsedFavorites = JSON.parse(favorites);
          const isFavorited = parsedFavorites.some(
            (favProduct) => favProduct.id === product.id
          );
          setIsFavorite(isFavorited);
        }
      } catch (error) {
        console.error('Favorileri kontrol etme hatası:', error);
      }
    };

    checkFavoriteStatus();
  }, [product.id]);

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let updatedFavorites = favorites ? JSON.parse(favorites) : [];

      if (isFavorite) {
        // Eğer zaten favoriye eklenmişse, favorilerden çıkar
        updatedFavorites = updatedFavorites.filter(
          (favProduct) => favProduct.id !== product.id
        );
      } else {
        // Favorilere ekle
        updatedFavorites.push(product);
      }

      // Favori listesi güncelleniyor
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Favori eklerken hata:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Purchase', { product })}
        >
          <Text style={styles.buttonText}>Satın Al</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite} 
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'} 
            size={32}
            color={isFavorite ? '#facc15' : '#1e3a8a'} 
            style={styles.heartIcon}
          />
          <Text style={styles.favoriteText}>Favorilere Ekle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#111827',
    justifyContent: 'center', 
  },
  content: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: '#facc15',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#facc15',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#111827',
    fontWeight: 'bold',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  heartIcon: {
    marginRight: 10,
  },
  favoriteText: {
    fontSize: 18,
    color: '#facc15',
    fontWeight: 'bold',
  },
});
