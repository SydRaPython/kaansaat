import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default function BrandScreen({ navigation }) {
  const brands = [
    { id: 'Seiko',   image: require('../assets/photo/seiko_logo.png') },
    { id: 'Casio',   image: require('../assets/photo/casio_logo.png') },
    { id: 'Sayki',   image: require('../assets/photo/sayki_logo.png') },
    { id: 'Versace', image: require('../assets/photo/versace_logo.png') },
    { id: 'Tissot',  image: require('../assets/photo/tissot_logo.png') },
  ];

  const renderBrand = ({ item }) => {
    const isSayki = item.id === 'Sayki';
    return (
      <TouchableOpacity
        style={[styles.card, isSayki && styles.saykiCard]}
        onPress={() => navigation.navigate('BrandProducts', { brandId: item.id })}
        activeOpacity={0.8}
      >
        <Image source={item.image} style={isSayki ? styles.saykiLogo : styles.logo} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Markalar</Text>
      <FlatList
        data={brands}
        renderItem={renderBrand}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - 20 /*paddingHorizontal*/ - CARD_MARGIN * 2 /*row gaps*/) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    color: '#facc15',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: CARD_MARGIN * 2,
  },
  card: {
    backgroundColor: 'gray',    // eski kodundaki genel kart rengi
    borderColor: '#fff',        // beyaz border
    borderWidth: 2,
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: CARD_MARGIN / 2,
    elevation: 4,
  },
  logo: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  name: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  saykiCard: {
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 4,

  },
  saykiLogo: {
    width: '300',
    height: '225',
    resizeMode: 'contain',  
   },
});
