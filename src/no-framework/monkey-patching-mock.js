const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

//Storing the original function call to .getWinner since we will be modifying it for other tests
const originalGetWinner = utils.getWinner
//Here are are mocking and saying that getWinner will always return p1
utils.getWinner = (p1, p2) => p1

//Runnign this test regularly will now always return the same exact result
const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup to reset the getWinner back to its original behavior
utils.getWinner = originalGetWinner
