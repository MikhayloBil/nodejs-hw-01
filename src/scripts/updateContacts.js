import * as fs from 'node:fs/promises';

import { PATH_DB } from '../../src/constants/contacts.js';

const updateSongs = (contacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

export default updateSongs;
