import * as fs from 'fs';

import { logError } from '@roxie/core';

const hiddenSystemFiles = [ '.DS_Store', 'Thumbs.db', 'thumbnail' ];

export const exists = (path: string) => fs.existsSync(path);

export function readDirectory(path: string) {
  try {
    return fs.readdirSync(path, { encoding: 'utf8' })
        .filter((name: string) => !hiddenSystemFiles.includes(name));
  } catch (err) {
    logError(err);
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

export function readJsonFile(path: string, defaultValue?: any) {
  try {
    return JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
  } catch (err) {
    logError(err);
    return defaultValue;
  }
}

export function writeJsonFile(path: string, data: any) {
  try {
    fs.writeFileSync(path, JSON.stringify(data), { encoding: 'utf8' });
  } catch (err) {
    logError(err);
  }
}