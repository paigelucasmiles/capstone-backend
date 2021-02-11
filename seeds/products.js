
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: 'Organic Linen Trousers',
          collection: 'Organic Linen Collection',
          description: "The linen trousers are the ideal loungewear piece. They are cut to be long and wide-leg for an effortless, easy fit. They have an elasticated waist for easy movement, a fly detail finished with white shell buttons, and pockets for functionality. This linen is laundered in small batches in Europe and tumbled at the mill for extra softness. It is OEKO-TEX certified, which is a reliable sustainability textiles standard. The dyes are GOTS (Global Organic Textiles Standard) certified. This is important as it avoids many harmful chemicals associated with dying going back into the environment.",
          image: '/images/p1.jpg',
          price: 150
        },
        {
          name: 'Organic Linen Robe',
          collection: 'Organic Linen Collection',
          description: "Our organic linen robe is a perfect layer to add over our loungewear sets. It is mid-long length, with long sleeves, waist tie and front pockets making it both elegant and practical. This is an all day essential that once you discover, you won't want to live without. This linen is laundered in small batches in Europe and tumbled at the mill for extra softness. It is OEKO-TEX certified, which is a reliable sustainability textiles standard. The dyes are GOTS (Global Organic Textiles Standard) certified. This is important as it avoids many harmful chemicals associated with dying going back into the environment.",
          image: '/images/p2.jpg',
          price: 150
        },
        {
          name: 'Organic Linen Shorts',
          collection: 'Organic Linen Collection',
          description: "These linen shorts are a staple for every wardrobe. With elasticated waist for easy movement and fly finished with white shell buttons. This detailing makes them more than just a stay at home piece, they can go anywhere. This linen is laundered in small batches in Europe and tumbled at the mill for extra softness. It is OEKO-TEX certified, which is a reliable sustainability textiles standard. The dyes are GOTS (Global Organic Textiles Standard) certified. This is important as it avoids many harmful chemicals associated with dying going back into the environment.",
          image: '/images/p3.jpg',
          price: 75
        },
        {
          name: 'Organic Linen Shirt & Short Set',
          collection: 'Organic Linen Collection',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lacus sed sapien dapibus porttitor eget vitae mauris. Morbi ac nisl accumsan, condimentum dolor sed, commodo tortor. Curabitur dictum ligula ullamcorper neque varius, bibendum porttitor urna condimentum. Nulla nec pellentesque lacus.",
          image: '/images/p4.jpg',
          price: 195
        },
        {
          name: 'Bamboo Silk Shirt',
          collection: 'Bamboo Silk Collection',
          description: "Our bamboo silk shirt is loose fitting for a relaxed feel. It is short sleeved with a front pocket and finished with beautiful shell buttons. Our bamboo silk is made with 100% certified organic bamboo silk fibre and is a sustainable alternative to silk made from silk worms. Furthermore it is possible to grow and harvest bamboo without the use of damaging chemicals. The material has an elegant sheen and is beautifully soft to the touch much like regular silk. Silk has long been regarded as the most special material for pyjamas.",
          image: '/images/p5.jpg',
          price: 150
        },
        {
          name: 'Bamboo Silk Short',
          collection: 'Bamboo Silk Collection',
          description: "These bamboo silk shorts are a staple for every wardrobe. They make a nice addition to the  Fosse silk shirt for an elegant and effortless look. With elasticated waist for easy movement and fly, finished with white shell buttons. This detailing makes them more than just a stay at home piece, they can go anywhere. Our bamboo silk is made with 100% certified organic bamboo silk fibre and is a sustainable alternative to silk made from silk worms. Furthermore it is possible to grow and harvest bamboo without the use of damaging chemicals. The material has an elegant sheen and is beautifully soft to the touch much like regular silk. Silk has long been regarded as the most special material for pyjamas.",
          image: '/images/p6.jpg',
          price: 85
        },
        {
          name: 'Bamboo Silk Robe',
          collection: 'Bamboo Silk Collection',
          description: "Our bamboo silk robe is a delightful indulgence, with a cut that is timeless and flattering to the body. It is mid-long length, with long sleeves, waist tie and front pockets making it both elegant and practical. Our bamboo silk is made with 100% certified organic bamboo silk fibre and is a sustainable alternative to silk made from silk worms. Furthermore it is possible to grow and harvest bamboo without the use of damaging chemicals. The material has an elegant sheen and is beautifully soft to the touch much like regular silk. This makes it the perfect addition to a Sunday morning in bed.",
          image: '/images/p7.jpg',
          price: 195
        },
        {
          name: 'Bamboo Silk Shirt & Shorts Set',
          collection: 'Bamboo Silk Collection',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lacus sed sapien dapibus porttitor eget vitae mauris. Morbi ac nisl accumsan, condimentum dolor sed, commodo tortor. Curabitur dictum ligula ullamcorper neque varius, bibendum porttitor urna condimentum. Nulla nec pellentesque lacus.",
          image: '/images/p8.jpg',
          price: 225
        },
      ]);
    });
};
