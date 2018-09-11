import fs from 'fs';
import { Singleton } from './injectable';

@Singleton
export class File {
  options = { encoding: 'utf8' };

  readDir(path) {
    return fs.readdirSync(path, this.options);
  }

  readFile(path, defaultValue) {
    try {
      return JSON.parse(fs.readFileSync(path, this.options));
    } catch (e) {
      return defaultValue;
    }
  }

  writeFile(path, data) {
    fs.writeFileSync(path, JSON.stringify(data), this.options);
  }
}