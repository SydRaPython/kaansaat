// data/products.js

export const productsByBrand = {
  Seiko: [
    {
      id: 'seiko_1',
      name: 'Seiko Presage Cocktail Time',
      price: '20.000,00 ₺',
      image: require('../assets/photo/seikopresage.png'),
    },
    {
      id: 'seiko_2',
      name: 'Seiko 5 SNXS75K',
      price: '12.945,00 ₺',
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
      price: '2.500,50 ₺',
      image: require('../assets/photo/casio.png'),
    },
    {
      id: 'casio_2',
      name: 'Casio MTP-VD03G',
      price: '3.324,05 ₺',
      image: require('../assets/photo/casiomtp.png'),
    },
    {
      id: 'casio_3',
      name: 'Casio MTP-VD03G-1A',
      price: '3.324,05 ₺',
      image: require('../assets/photo/casiogreen.png'),
    },
  ],
  Sayki: [
    {
      id: 'sayki_1',
      name: 'Sayki Gentilhomme',
      price: '5.000,00 ₺',
      image: require('../assets/photo/sayki.png'),
    },
  ],
  Versace: [
    {
      id: 'versace_1',
      name: 'Versace VEVK01021',
      price: '34.950,20 ₺',
      image: require('../assets/photo/versace.png'),
    },
  ],
  Tissot: [
    {
      id: 'tissot_1',
      name: 'Tissot Gentleman PowerMatic 80',
      price: '39.400,50 ₺',
      image: require('../assets/photo/tissot.png'),
    },
  ],
};
export const allProducts = Object.values(productsByBrand).flat();
