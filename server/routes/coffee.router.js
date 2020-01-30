const router = require('express').Router();
const { Coffee } = require('../models');

// Your code here!
// Remember that these routes are already mounted on
// /api/coffee!

router.get('/', async (req, res, next) => {
  try {
    let coffees = await Coffee.findAll();
    res.send(coffees);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let coffeeObj = req.body;
    let newCoffee = await Coffee.create(coffeeObj);
    if (newCoffee) {
      res.status(201).send(newCoffee);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/ingredients/:ingredientName', async (req, res, next) => {
  try {
    let ingredientName = req.params.ingredientName;
    let coffee = await Coffee.findByIngredient(ingredientName);
    res.send(coffee);
  } catch (error) {
    next(error);
  }
});

router.get('/:coffeeId', async (req, res, next) => {
  try {
    let id = req.params.coffeeId;
    let coffee = await Coffee.findById(id);
    if (coffee) {
      res.send(coffee);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
