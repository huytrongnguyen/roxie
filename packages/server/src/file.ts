import fs from 'fs';

import { Roxie } from '@roxie/core';

const hiddenSystemFiles = [ '.DS_Store', 'Thumbs.db', 'thumbnail' ];

export const exists = (path: string) => fs.existsSync(path);

export function readDirectory(path: string) {
  try {
    return fs.readdirSync(path, { encoding: 'utf8' })
        .filter((name: string) => !hiddenSystemFiles.includes(name));
  } catch (err) {
    Roxie.Logger.logError(err);
    return [];
  }
}

export function readDirectoryContents(path: string) {
  return readDirectory(path).map((name: string) => {
    const stats = fs.statSync(`${path}/${name}`);
    return {
      name: name.split('.')[0],
      kind: stats.isDirectory() ? 'Folder' : name.split('.')[1],
      ...stats,
    }
  });
}

export function readFile(path: string, defaultValue?: string) {
  try {
    return fs.readFileSync(path, { encoding: 'utf8' });
  } catch (err) {
    Roxie.Logger.logError(err);
    return defaultValue;
  }
}

export function readJsonFile<T = any>(path: string, defaultValue?: T) {
  try {
    return JSON.parse(fs.readFileSync(path, { encoding: 'utf8' })) as T;
  } catch (err) {
    Roxie.Logger.logError(err);
    return defaultValue;
  }
}

export function writeJsonFile(path: string, data: any) {
  try {
    fs.writeFileSync(path, JSON.stringify(data), { encoding: 'utf8' });
  } catch (err) {
    Roxie.Logger.logError(err);
  }
}

export function readCsvFile<T = any>(path: string) {
  try {
    const csv = fs.readFileSync(path, { encoding: 'utf8' }),
          contents = csv.split('\n').filter(line => line.length).map(line => line.split('\t')),
          fieldNames = contents[0];

    return contents.slice(1)
        .map(line => {
          return fieldNames.reduce((item, name, index) => {
            let value = line[index];
            item[name] = value;
            return item;
          }, {} as T);
    })
  } catch (err) {
    Roxie.Logger.logError(err);
    return [];
  }
}