import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DrawerActions, CommonActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import BrandScreen from './screens/BrandScreen';
import BrandProductsScreen from './screens/BrandProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import PurchaseScreen from './screens/PurchaseScreen';
import CreditCardForm from './screens/CreditCardFormScreen';
import HakkimizdaScreen from './screens/HakkimizdaScreen';
import PayAtHome from './screens/PayAtHome';
import FavorilerScreen from './screens/FavorilerScreen';

const Drawer = createDrawerNavigator();
const Stack  = createStackNavigator();

function HamburgerMenu({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={{ marginLeft: 16 }}
    >
      <Ionicons name="menu" size={28} color="#facc15" />
    </TouchableOpacity>
  );
}

function HeaderTitleWithIcon() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Ionicons name="time-outline" size={28} color="#facc15" style={{ marginRight: 10 }} />
      <Text style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#facc15',
        fontFamily: 'monospace'
      }}>
        KaanSaat
      </Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  const { navigation } = props;
  const items = [
    { label: 'Ana Sayfa', route: 'Ana Sayfa' },
    { label: 'Markalar', route: 'Markalar' },
    { label: 'Favoriler', route: 'Favoriler' },
    { label: 'Hakkımızda', route: 'Hakkımızda' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20, backgroundColor: '#1b2438', bottom: -20 }}>
        <Ionicons name="time-outline" size={28} color="#facc15" style={{ marginRight: 10 }} />
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: '#facc15',
          fontFamily: 'monospace'
        }}>
          KaanSaat
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        {items.map(({ label, route }, idx) => (
          <TouchableOpacity
            key={idx}
            style={{
              backgroundColor: '#1b2438',
              borderRadius: 30,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: idx === 0 ? 0 : 8,
            }}
            onPress={() =>
              navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: route }],
              }))
            }
          >
            <Text style={{ color: '#facc15', fontSize: 16 }}>{label}</Text>
          </TouchableOpacity>
        ))}
      </DrawerContentScrollView>
    </View>
  );
}

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderTitleWithIcon />,
        headerStyle: { backgroundColor: '#1b2438' },
        headerTintColor: '#facc15',
        headerTitleAlign: 'center',
        headerLeft: () => <HamburgerMenu navigation={navigation} />,
      }}
    >
      <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Ürün Detayı' }}
      />
      <Stack.Screen name="BrandProducts" component={BrandProductsScreen} options={{ title: 'Marka Ürünleri' }} />
      <Stack.Screen name="Purchase" component={PurchaseScreen} options={{ title: 'Ödeme Seçenekleri' }} />
      <Stack.Screen name="CreditCardForm" component={CreditCardForm} options={{ title: 'Kredi Kartı' }} />
      <Stack.Screen name="PayAtHome" component={PayAtHome} options={{ title: 'Kapıda Ödeme' }} />
    </Stack.Navigator>
  );
}

function BrandsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderTitleWithIcon />,
        headerStyle: { backgroundColor: '#1b2438' },
        headerTintColor: '#facc15',
        headerTitleAlign: 'center',
        headerLeft: () => <HamburgerMenu navigation={navigation} />,
      }}
    >
      <Stack.Screen name="Markalar" component={BrandScreen} />
      <Stack.Screen name="BrandProducts" component={BrandProductsScreen} options={{ title: 'Marka Ürünleri' }} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Ürün Detayı' }}
      />
      <Stack.Screen name="Purchase" component={PurchaseScreen} options={{ title: 'Ödeme Seçenekleri' }} />
      <Stack.Screen name="CreditCardForm" component={CreditCardForm} options={{ title: 'Kredi Kartı' }} />
      <Stack.Screen name="PayAtHome" component={PayAtHome} options={{ title: 'Kapıda Ödeme' }} />
    </Stack.Navigator>
  );
}

function FavoritesStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Favoriler"
      screenOptions={{
        headerTitle: () => <HeaderTitleWithIcon />,
        headerStyle: { backgroundColor: '#1b2438' },
        headerTintColor: '#facc15',
        headerTitleAlign: 'center',
        headerLeft: () => <HamburgerMenu navigation={navigation} />,
      }}
    >
      <Stack.Screen
        name="Favoriler"
        component={FavorilerScreen}
        options={{ title: 'Favoriler' }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Ürün Detayı' }}
      />
      <Stack.Screen name="Purchase" component={PurchaseScreen} options={{ title: 'Ödeme Seçenekleri' }} />
      <Stack.Screen name="CreditCardForm" component={CreditCardForm} options={{ title: 'Kredi Kartı' }} />
      <Stack.Screen name="PayAtHome" component={PayAtHome} options={{ title: 'Kapıda Ödeme' }} />
    </Stack.Navigator>
  );
}

function AboutUsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderTitleWithIcon />,
        headerStyle: { backgroundColor: '#1b2438' },
        headerTintColor: '#facc15',
        headerTitleAlign: 'center',
        headerLeft: () => <HamburgerMenu navigation={navigation} />,
      }}
    >
      <Stack.Screen
        name="Hakkımızda"
        component={HakkimizdaScreen}
        options={{ title: 'Hakkımızda' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Ana Sayfa"
        screenOptions={{
          drawerStyle: { backgroundColor: '#111827' },
          drawerActiveTintColor: '#facc15',
          drawerInactiveTintColor: '#fff',
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Ana Sayfa" component={HomeStack} />
        <Drawer.Screen name="Markalar" component={BrandsStack} />
        <Drawer.Screen name="Favoriler" component={FavoritesStack} />
        <Drawer.Screen name="Hakkımızda" component={AboutUsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
