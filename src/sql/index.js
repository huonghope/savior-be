module.exports = {
  getData: 'INSERT INTO product_regist (accountId, type, name, category,  date, desc, img,) VALUES (?, ?, ?, ?, ?, ?, ?)',
  insertProduct: 'SELECT * FROM product_regist',
};
