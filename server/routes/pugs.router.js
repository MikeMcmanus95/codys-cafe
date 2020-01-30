const router = require('express').Router();
const { Pug } = require('../models');

// Your code here!
// Remember that these routes are already mounted on
// /api/pugs!

router.get('/', async (req, res, next) => {
  try {
    let pugs = await Pug.findAll();
    res.send(pugs);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let newPug = await Pug.create(req.body);
    res.status(201).send(newPug);
  } catch (error) {
    next(error);
  }
});

router.get('/:pugId', async (req, res, next) => {
  try {
    let pug = await Pug.find({
      where: {
        id: req.params.pugId,
      },
    });
    if (pug) {
      res.send(pug);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:pugId', async (req, res, next) => {
  try {
    let currPugId = req.params.pugId;
    let newData = req.body;
    let pug = await Pug.findById(currPugId);
    if (pug === null) {
      res.sendStatus(404);
    } else {
      let newPug = await pug.update(newData);
      res.send(newPug);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:pugId', async (req, res, next) => {
  try {
    let currPugId = req.params.pugId;
    let deletePug = await Pug.destroy({
      where: {
        id: currPugId,
      },
    });
    if (deletePug) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/favoriteCoffee/:favoriteCoffeeName', async (req, res, next) => {
  try {
    let fave = req.params.favoriteCoffeeName;
    let pugs = await Pug.findByCoffee(fave);
    if (pugs) {
      res.send(pugs);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
