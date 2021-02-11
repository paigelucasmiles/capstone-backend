
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        {productId: 33, productColor: "white", productSize: "small", productQuantity: 1},
        {productId: 34, productColor: "green", productSize: "medium", productQuantity: 2},
        {productId: 35, productColor: "blue", productSize: "large", productQuantity: 3},
      ]);
    });
};
