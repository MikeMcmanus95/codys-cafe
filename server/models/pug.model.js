const Sequelize = require('sequelize');
const db = require('./database');
const Coffee = require('./coffee.model');

const Pug = db.define('pugs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  biography: {
    type: Sequelize.TEXT,
  },
});

Pug.prototype.isPuppy = function() {
  return this.age < 1;
};

Pug.prototype.shortBio = function() {
  let newBio = '';
  let punctuation = ['.', '!', '?'];
  for (let i = 0; i < this.biography.length; i++) {
    let char = this.biography[i];
    if (punctuation.includes(char)) {
      newBio = this.biography.slice(0, i);
      return newBio;
    }
  }
};

Pug.findByCoffee = function(searchTerm) {
  return Pug.findAll({
    include: [
      {
        model: Coffee,
        as: 'favoriteCoffee',
        where: {
          name: searchTerm,
        },
      },
    ],
  });
};

Pug.beforeValidate(pug => {
  pug.name = pug.name[0].toUpperCase() + pug.name.substring(1);
});

module.exports = Pug;
