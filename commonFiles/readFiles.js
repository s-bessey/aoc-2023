import * as fs from 'fs';
export function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) return reject(err);
      var input = data.toString().split('\n');
      return resolve(input)
    })
  })
}


