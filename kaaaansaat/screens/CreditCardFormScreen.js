import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreditCardFormScreen({ route, navigation }) {
    const { product } = route.params;
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (name && cardNumber && expiry && cvv) {
      Alert.alert('Ödeme Başarılı', 'Bilgileriniz alındı.');
      navigation.goBack(); 
    } else {
      Alert.alert('Eksik Bilgi', 'Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kart Bilgilerini Gir</Text>

      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Kart Numarası"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        maxLength={16}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="AA/YY"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={expiry}
          onChangeText={setExpiry}
          maxLength={4}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="CVV"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
          maxLength={3}
          secureTextEntry
        />
      </View>
        <Text style = {styles.uyari}>Ödenecek Miktar: {product.price}</Text>

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Ionicons name="lock-closed-outline" size={20} color="white" />
        <Text style={styles.buttonText}>Ödemeyi Tamamla</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#facc15',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  uyari: {
    color: "#facc15",
    fontSize: 16,
    

  },
});
