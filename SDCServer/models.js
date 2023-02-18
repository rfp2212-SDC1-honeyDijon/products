const db = require('../database');

const getProducts = (count, page) => db.query(`SELECT * FROM products LIMIT ${page * count}`)
  .then((results) => results.rows)
  .catch((error) => {
    throw new Error(`Error retrieving getProducts, error message: ${error.message}`);
  });

const getProduct = (productId) => db.query(`SELECT * FROM products WHERE id = ${productId}`)
  .then((results) => {
    if (results.rows.length === 0) {
      throw new Error(`ProductId ${productId} not found`);
    }
    return results.rows[0];
  })
  .catch((error) => {
    throw new Error(`Error retrieving Product, error message: ${error.message}`);
  });

module.exports = {
  getProducts,
  getProduct,
};
