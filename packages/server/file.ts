import fs from 'fs';

import { logError } from '@roxie/core';

const hiddenSystemFiles = [ '.DS_Store', 'Thumbs.db', 'thumbnail' ];

export const exists = (path: string) => fs.existsSync(path);

export function readDirectory(path: string) {
  try {
    return fs.readdirSync(path, { encoding: 'utf8' })
        .filter(name => !hiddenSystemFiles.includes(name));
  } catch (err) {
    logError(err);
    return [];
  }
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