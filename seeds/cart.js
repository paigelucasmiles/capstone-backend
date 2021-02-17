
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart').insert([
        {productId: 73, productColor: "white", productSize: "small", productQuantity: 1}
      ]);
    });
};
