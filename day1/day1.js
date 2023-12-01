import { read } from '../commonFiles/prepData.js'

const doc = read('day1/input.txt')

// part 1
const p1 = doc.map((val) => val.replace(/[^0-9]+/g, ''))

const value = p1.map((val) => parseInt(val[0] + val[val.length - 1])).reduce((a, b) => a + b)

console.log('Part 1: ' + value)

// part 2
const p2 = doc.map((val) => val.replace(/one/g, 'o1e').replace(/two/g, 't2o').replace(/three/g, 't3e').replace(/four/g, 'f4r').replace(/five/g, 'f5e').replace(/six/g, 's6x').replace(/seven/g, 's7n').replace(/eight/g, 'e8t').replace(/nine/g, 'n9e').replace(/[^0-9]+/g, ''))
console.log('Part 2: ' + p2.map((val) => parseInt(val[0] + val[val.length - 1])).reduce((a, b) => a + b))

// 54978 is too low?
