
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        {productId: 17, productColor: "white", productSize: "small", productQuantity: 1},
        {productId: 18, productColor: "green", productSize: "medium", productQuantity: 2},
        {productId: 19, productColor: "blue", productSize: "large", productQuantity: 3},
      ]);
    });
};
