import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const AboutUsScreen = () => {
  const handleContactPress = () => {
    Alert.alert("İletişim", "İletişime geçmenize gerek yok Kaan Sacit Bey zaten tam yanınızda duruyor");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hakkımızda</Text>
      <Text style={styles.description}>
        Kaan Saat, 2025 yılında kurulan ve kullanıcılarına yüksek kaliteli saatler sunmayı amaçlayan bir markadır.
        Bizim için kalite ve müşteri memnuniyeti her şeyin önündedir. Zamanı stil ve kalite ile buluşturmayı hedefliyoruz.
      </Text>
      <Text style={styles.description}>
        Saatlerimizdeki şıklık ve fonksiyonellik, günlük yaşantınıza tarz katarken zamanın değerini de vurgular.
        Sizi ve ihtiyaçlarınızı anlamak, doğru ürünü doğru fiyatla sunmak için sürekli olarak gelişiyoruz.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleContactPress}>
        <Text style={styles.buttonText}>Bize Ulaşın</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#facc15',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#facc15',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
});

export default AboutUsScreen;
