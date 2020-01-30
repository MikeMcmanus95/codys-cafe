# Cody's Cafe

Hi! My name is Cody! Can you help me build my cafe?!?

<img width="439" alt="codys-cafe" src="https://user-images.githubusercontent.com/12876798/38030875-d3166276-3267-11e8-96d9-309aa8cf008b.png">

## Getting Started

First thing's first!

- Fork and clone this repo!
- `npm install`
- `npm test`
- `createdb codys_cafe` (or if you don't the `createdb` utility, simply create a database called `codys_cafe` via your preferred means)

This runs all the specs you need to build out my cafe api! They of course run with `mocha` and `chai`!

I can't wait! This is going to be spec-tacular! Let's get started!

## Code

We're building out the cafe's backend! Here's what I have planned:

- There will be a `Coffee` model, representing a `coffee` database table (with all my pup-ular coffee drinks!)

  - This will go in `server/models/coffee.model.js`
  - The specs are in `test/coffee.model.test.js`

- There will be a `Pug` model, representing a `pugs` database table (containing all my pug friends!)

  - This will go in `server/models/pug.model.js`, and you can set associations in `models/index.js`
  - The specs are in `test/pug.model.test.js`

- We'll serve up the coffee resource via `/api/coffee`!

  - This will go in `server/routes/coffee.router.js`
  - The specs are in `test/coffee.routes.test.js`

- We'll serve up the pugs resource via `/api/pugs`!

  - This will go in `server/routes/pug.router.js`
  - The specs are in `test/pug.routes.test.js`

- Finally, we'll need some utility functions to do some work for us around the cafe. Funky functions!
  - These will go in `server/funky-funcs/index.js`
  - The specs are in `test/funky-funcs.test.js`

You should only need to work out of those files listed above! The `Pug` model is somewhat dependent on the `Coffee` model, and the `/api/pugs` routes are somewhat dependent on the `Pug` model. So I recommend working on them in the order listed above. The funky funcs can be done independently of the routes/models though! That's why they're so funky!
