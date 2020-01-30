// do not modify this file
const {db, Pug, Coffee} = require('../server/models')

module.exports = async () => {
  await db.sync({force: true})

  const [coffee1, coffee2] = await Promise.all([
    Coffee.create({
      name: 'puppaccino',
      ingredients: ['espresso', 'frothed-milk', 'love']
    }),
    Coffee.create({
      name: 'mocha',
      ingredients: ['espresso', 'hot-cocoa', 'whipped-cream', 'love']
    })
  ])

  const [cody, doug, penny] = await Promise.all([
    Pug.create({
      name: 'Cody',
      age: 7,
      favoriteCoffeeId: coffee1.id
    }),
    Pug.create({
      name: 'Doug',
      favoriteCoffeeId: coffee2.id
    }),
    Pug.create({
      name: 'Penny',
      favoriteCoffeeId: coffee1.id
    })
  ])

  return [coffee1, coffee2, cody, doug, penny]
}
