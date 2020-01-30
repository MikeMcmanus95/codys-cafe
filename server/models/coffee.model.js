const Sequelize = require('sequelize');
const db = require('./database');
const Op = Sequelize.Op;

const Coffee = db.define('coffee', {
  // your code here
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

Coffee.prototype.getIngredients = function() {
  return this.ingredients.join(', ');
};

Coffee.findByIngredient = function(searchTerm) {
  const coffees = Coffee.findAll({
    where: {
      ingredients: {
        [Op.contains]: [searchTerm],
      },
    },
  });
  return coffees;
};

Coffee.beforeValidate(coffee => {
  if (coffee.ingredients) {
    if (!coffee.ingredients.includes('love')) {
      coffee.ingredients.push('love');
    }
  }
});

module.exports = Coffee;
