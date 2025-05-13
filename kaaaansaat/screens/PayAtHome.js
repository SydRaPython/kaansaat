import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView
} from 'react-native';

export default function PayAtHome({ route }) {
  const { product } = route.params || {};
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [building, setBuilding] = useState('');

  const handleContinue = () => {
    if (!province || !district || !neighborhood || !street || !apartment || !building) {
      Alert.alert('Uyarı', 'Lütfen tüm adres alanlarını eksiksiz doldurun.');
      return;
    }
    Alert.alert('Onaylandı', 'Ürün 3 iş günü içerisinde adresinize kargolanacaktır!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flexContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Teslimat Bilgileri</Text>

          {[
            { label: 'İl', value: province, setter: setProvince, placeholder: 'Örneğin: İstanbul' },
            { label: 'İlçe', value: district, setter: setDistrict, placeholder: 'Örneğin: Avcılar' },
            { label: 'Mahalle', value: neighborhood, setter: setNeighborhood, placeholder: 'Denizköşkler Mah.' },
            { label: 'Cadde/Sokak', value: street, setter: setStreet, placeholder: 'Cumhuriyet Cad.' },
            { label: 'Bina No', value: building, setter: setBuilding, placeholder: '15', numeric: true },
            { label: 'Daire No', value: apartment, setter: setApartment, placeholder: '3', numeric: true },
          ].map(({ label, value, setter, placeholder, numeric }, i) => (
            <View style={styles.fieldGroup} key={i}>
              <Text style={styles.label}>{label}:</Text>
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#9ca3af"
                value={value}
                onChangeText={setter}
                keyboardType={numeric ? 'numeric' : 'default'}
              />
            </View>
          ))}

          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Devam Et</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111827',
  },
  flexContainer: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#facc15',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#facc15',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#facc15',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30, 
  },
  buttonText: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
