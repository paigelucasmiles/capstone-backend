
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {
          name: 'Organic Linen Trousers',
          collection: 'Organic Linen Collection',
          image: '/images/p1.jpg',
          price: 100
        },
        {
          name: 'Organic Linen Robe',
          collection: 'Organic Linen Collection',
          image: '/images/p2.jpg',
          price: 100
        },
        {
          name: 'Organic Linen Shorts Set',
          collection: 'Organic Linen Collection',
          image: '/images/p3.jpg',
          price: 100
        },
        {
          name: 'Organic Linen Long Set',
          collection: 'Organic Linen Collection',
          image: '/images/p4.jpg',
          price: 100
        },
        {
          name: 'Bamboo Silk Shirt',
          collection: 'Bamboo Silk Collection',
          image: '/images/p5.jpg',
          price: 100
        },
        {
          name: 'Bamboo Silk Short',
          collection: 'Bamboo Silk Collection',
          image: '/images/p6.jpg',
          price: 100
        },
        {
          name: 'Bamboo Silk Robe',
          collection: 'Bamboo Silk Collection',
          image: '/images/p7.jpg',
          price: 100
        },
        {
          name: 'Bamboo Silk Short Set',
          collection: 'Bamboo Silk Collection',
          image: '/images/p8.jpg',
          price: 100
        },
      ]);
    });
};
