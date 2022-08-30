const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const db = require('../config/mysql');
const sql = require('../sql');

const insertProduct = catchAsync(async (req, res) => {
  const [row] = await db.query(sql.insertProduct);
  res.status(httpStatus.CREATED).send({ hello: 'world' });
});

const getMonitorningData = catchAsync(async (req, res) => {
  const [row] = await db.query(sql.getData);
  res.status(httpStatus.CREATED).send({ hello: 'world' });
});

module.exports = {
  insertProduct,
  getMonitorningData,
};
