import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; 

export default function AboutUsScreen() {
  const [fontsLoaded] = useFonts({
    'Arvo-Bold': require('../assets/fonts/Arvo-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleContactPress = () => {
    Alert.alert(
      'İletişim',
      'İletişime geçmenize gerek yok, Kaan Sacit Bey zaten tam yanınızda duruyor.'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hakkımızda</Text>

      <Text style={styles.description}>
        Kaan Saat, 2025 yılında Kaan Sacit Coşkun tarafından yapılan bir mobil
        uygulama ödevi olarak ortaya çıkmıştı; sonrasında işler ciddiye bindi ve
        2030’da kurulan bir marka haline geldi. Kullanıcılarına yüksek kaliteli
        saatler sunmayı amaçlıyoruz. Bizim için kalite ve müşteri memnuniyeti her
        şeyin önündedir.
      </Text>

<View style={styles.seikosatici}>
  <Text style={styles.seikosatici}>{"\n"}SEIKO</Text>
  <Text style={styles.yetkilisat}>YETKILI SATICISI</Text>
  <Text style={{fontFamily: "monospace", color: "#facc15", textAlign: "center", fontSize: 22 }}>KaanSaat</Text>
</View>

      <TouchableOpacity style={styles.button} onPress={handleContactPress}>
        <Text style={styles.buttonText}>Bize Ulaşın</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    fontFamily: "monospace"
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'justify',
  },
  seikosatici: {
    fontSize: 25,
    color: '#facc15',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Arvo-Bold',
    letterSpacing: 7
  },
    yetkilisat: {
    fontSize: 22,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'monospace',
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
