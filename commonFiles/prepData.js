import {readFileSync} from 'fs';
export function read(filename) {
  return readFileSync(filename, 'utf8').split('\n');
}
