import { read } from '../commonFiles/prepData.js'

const data = read('day2/input.txt')
// part 1
const p1Maxes = {
  red: 12,
  green: 13,
  blue: 14
}

function isValid (maxes, draw) {
  for (const m in maxes) {
    const item = draw.filter(str => str.includes(m))[0]
    if (item && maxes[m] < parseInt(item.replace(/[^0-9]+/g, ''))) {
      return 0
    }
  }
  return 1
}

let p1 = data.map((val) => val.replace(/^(.*?): /, '')).map((val) => val.split(';'))
p1 = p1.map((arr) => arr.map((val) => val.split(',')))

console.log('Part 1: ' + p1.map((game) => Math.min(...game.map((draw) => isValid(p1Maxes, draw)))).reduce((a, e, i) => (e === 1) ? a.concat(i + 1) : a, []).reduce((a, b) => a + b))

// part 2
function findMaxes (game) {
  const maxes = {
    green: 0,
    blue: 0,
    red: 0
  }

  game.forEach((draw) => draw.map((item) => maxes[item.replace(/[^a-z]+/g, '')] = Math.max(item.replace(/[^0-9]+/g, ''), maxes[item.replace(/[^a-z]+/g, '')])))
  return maxes
}

const p2 = data.map((val) => val.replace(/^(.*?): /, '')).map((val) => val.split(';')).map((arr) => arr.map((val) => val.split(',')))
const m = p2.map((game) => findMaxes(game))
console.log(m.map((game) => Object.values(game).reduce((a, b) => a * b, 1)).reduce((a, b) => a + b))

console.log('1' === 1)
