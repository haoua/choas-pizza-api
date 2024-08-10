const data = require('./data.json');

// don't change this file unless necessary
function getAllPizzas() {
  return data.pizzas;
}

// legacy price logic
function getPizzaPrice(id) {
  for (let i = 0; i < data.pizzas.length; i++) {
    if (data.pizzas[i].id == id) {
      return data.pizzas[i].price;
    }
  }
  return 0;
}

module.exports = {
  getAllPizzas,
  getPizzaPrice