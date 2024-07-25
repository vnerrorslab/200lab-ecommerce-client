import { _mock } from './_mock';

// ----------------------------------------------------------------------

const NAME = [
  'Apple iPhone',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
  'Microsoft Surface',
  'Tesla Model S',
  'Amazon Echo',
  'Google Pixel',
  'Bose QuietComfort',
  'Canon EOS',
  'HP Spectre',
  'LG OLED',
  'Rolex Submariner',
  'Chanel No.5',
  'Louis Vuitton Speedy',
  'Gucci Ace',
  'Ray-Ban Aviator',
  'Herschel Little America',
  'Le Creuset Dutch Oven',
  'Yeti Tumbler',
  'Patagonia Nano Puff',
  'Lululemon Align Leggings',
  'Allbirds Wool Runners',
];

const CATEGORIES = [
  'Electronics',
  'Fashion and Apparel',
  'Home and Garden',
  'Beauty and Personal Care',
  'Health and Wellness',
  'Toys and Games',
  'Sports and Outdoors',
  'Baby and Kids',
  'Automotive and Industrial',
  'Pet Supplies',
  'Food and Beverage',
  'Office and School Supplies',
  'Jewelry and Accessories',
  'Arts and Crafts',
  'Books and Media',
  'Travel and Luggage',
  'Gifts and Flowers',
  'Musical Instruments',
  'Party Supplies',
  'Business and Industrial Supplies',
  'Tools and Hardware',
  'Electronics Accessories',
  'Furniture and Decor',
  'Computer and Software',
];

const DESCRIPTION = `
<p>Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.</p>

<br/>
<ul>
  <li> Aenean viverra rhoncus pede. </li>
  <li> Aenean viverra rhoncus pede. </li>
  <li> Aenean viverra rhoncus pede. </li>
  <li> Aenean viverra rhoncus pede. </li>
  <li> Aenean viverra rhoncus pede. </li>
</ul>
<br/>

<p>Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.</p>
`;

// ----------------------------------------------------------------------

export const _productsTable = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  orderId: `#011120${index + 1}`,
  item: NAME[index],
  deliveryDate: _mock.time(index),
  price: _mock.number.price(index),
  status: ['Completed', 'To Process', 'Cancelled', 'Return'][index] || 'Completed',
}));

export const _products = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  stock: 100,
  name: NAME[index],
  description: DESCRIPTION,
  category: CATEGORIES[index],
  price: _mock.number.price(index),
  sold: _mock.number.nativeM(index),
  caption: _mock.description(index),
  coverUrl: _mock.image.product(index),
  ratingNumber: _mock.number.rating(index),
  totalReviews: _mock.number.nativeL(index),
  label: ['sale', 'new', 'sale', 'sale'][index] || '',
  priceSale:
    [
      _mock.number.price(1),
      _mock.number.price(2),
      _mock.number.price(3),
      _mock.number.price(4),
      _mock.number.price(5),
    ][index] || 0,
  images: [
    _mock.image.product(1),
    _mock.image.product(2),
    _mock.image.product(3),
    _mock.image.product(4),
    _mock.image.product(5),
    _mock.image.product(6),
    _mock.image.product(7),
    _mock.image.product(8),
  ],
}));
