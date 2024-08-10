const express = require('express');
const router = express.Router();
const pizza = require('./pizza');
const orders = require('./orderManager');

router.get('/pizzas', (req, res) => {
  res.json(pizza.getAllPizzas());
});

router.post('/orders', (req, res) => {
  const result = orders.createOrder(req.body);
  res.json(result);
});

router.get('/orders', (req, res) => {
  res.json(orders.getOrders());
});

module.exports = router;