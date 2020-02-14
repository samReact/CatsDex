export const breeds = [
  'Abyssinian',
  'Aegean',
  'American Bobtail',
  'Asian Semi-longhair',
  'Bengal',
  'Birman	',
  'British Shorthair',
  'Cyprus',
  'Donskoy',
  'Egyptian Mau',
  'Foldex',
  'Havana Brown',
  'Khao Manee',
  'Korat',
  'Persian',
  'Scottish Fold',
  'Sphynx',
  'York Chocolate',
];

export const cats = [
  {
    id: 0,
    name: 'Oliver',
    breed: 'Asian Semi-longhair',
    gender: 'm',
    age: '9',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/200px-Tiffanie_at_cat_show.jpg',
    description:
      'The Asian Semi-Longhair is a cat breed similar to the Asian Shorthair except it has semi-long fur. The breed is also known by the name Tiffanie or Tiffany. It is recognized in any of the Asian Shorthair or Burmese colors and patterns. Like the Asian Shorthair, the breed was developed in Asia and is not currently recognized by any U.S. Registries. It has full recognition in the GCCF. It is related to, and in some registries distinct from, the Chantilly-Tiffany or Foreign Longhair, the North American variant.',
  },
  {
    id: 1,
    name: 'Lea',
    breed: 'Bengal',
    gender: 'f',
    age: '5',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/BengalCat_Stella.jpg/200px-BengalCat_Stella.jpg',
    description:
      'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, the Asian leopard cat and the Egyptian Mau, which gives them their golden shimmer – the breed name comes from the taxonomic name. Bengals have a wild appearance and may show spots, rosettes, arrowhead markings, or marbling.',
  },
  {
    id: 2,
    name: 'Milo',
    breed: 'Birman',
    gender: 'm',
    age: '3',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Birman2.jpg/200px-Birman2.jpg',
    description:
      'The Birman, also called the "Sacred Cat of Burma", is a domestic cat breed. The Birman is a long-haired, colour-pointed cat distinguished by a silky coat, deep blue eyes, and contrasting white "gloves" or "socks" on each paw.',
  },
  {
    id: 3,
    name: 'Patouchette',
    breed: 'American Bobtail',
    gender: 'f',
    age: '12',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/American_bobtail_2.jpg/200px-American_bobtail_2.jpg',
    description:
      'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s. It is most notable for its stubby "bobbed" tail about one-third to one-half the length of a normal cat\'s tail. This is the result of a cat body type genetic mutation affecting the tail development, similar to that of a Manx cat.',
  },
  {
    id: 4,
    name: 'Orcha',
    breed: 'Persian',
    gender: 'f',
    age: '2',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Persialainen.jpg/200px-Persialainen.jpg',
    description:
      'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in the English-speaking countries. In the Middle East region, they are widely known as "Shirazi cats" and in Iran they are known as "Shiraz cat". The first documented ancestors of the Persian were imported into Italy from Iran around 1620.',
  },
];

export const agesList = [...Array(20).keys()].map(e => e.toString());

export const featureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.211513, 46.384264],
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.215, 46.388],
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.215, 46.38],
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.21, 46.38],
      },
    },
  ],
};
