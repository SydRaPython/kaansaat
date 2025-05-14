import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetailScreen({ route, navigation }) {
  const product = route?.params?.product;
  const [isFavorite, setIsFavorite] = useState(false);

  // Ürün yoksa: Uyarı ver, Ana Sayfa'ya yönlendir
  useEffect(() => {
    if (!product) {
      console.error('Ürün bilgisi yüklenemedi');
      Alert.alert(
        '⚠️ Hata',
        'Ürün bilgisi yüklenemedi.',
        [
          {
            text: 'Tamam',
            onPress: () =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Ana Sayfa' }],
                })
              ),
            style: 'destructive',
          },
        ],
        { cancelable: false }
      );
    }
  }, [product, navigation]);

  // Favori durumu kontrolü
  useEffect(() => {
    const loadFav = async () => {
      try {
        const stored = await AsyncStorage.getItem('favorites');
        if (stored) {
          const arr = JSON.parse(stored);
          setIsFavorite(arr.some((f) => f.id === product?.id));
        }
      } catch (e) {
        console.error('Favori yükleme hatası:', e);
      }
    };

    if (product) {
      loadFav();
    }
  }, [product]);

  // Favori ekle/çıkar
  const toggleFavorite = async () => {
    try {
      const stored = await AsyncStorage.getItem('favorites');
      const arr = stored ? JSON.parse(stored) : [];
      let updated;

      if (isFavorite) {
        updated = arr.filter((f) => f.id !== product.id);
      } else {
        updated = [...arr, product];
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(updated));
      setIsFavorite(!isFavorite);
    } catch (e) {
      console.error('Favori güncelleme hatası:', e);
    }
  };

  // Ürün gelmemişse gösterilecek geçici mesaj
  if (!product) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>Ana sayfaya yönlendiriliyorsunuz...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>

        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => navigation.navigate('Purchase', { product })}
        >
          <Text style={styles.buyText}>Satın Al</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={28}
            color={isFavorite ? '#facc15' : '#9ca3af'}
            style={styles.heartIcon}
          />
          <Text style={styles.favoriteText}>
            {isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 8,
  },
  name: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#facc15',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#facc15',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  buyText: {
    fontSize: 18,
    color: '#111827',
    fontWeight: 'bold',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: 8,
  },
  favoriteText: {
    fontSize: 16,
    color: '#facc15',
    fontWeight: '500',
  },
  fallbackContainer: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 18,
    color: '#facc15',
  },
});
