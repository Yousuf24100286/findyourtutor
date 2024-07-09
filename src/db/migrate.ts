import path from 'path';
import { migrate  } from "drizzle-orm/node-postgres/migrator";
import { db, sql } from ".";

(async () => {
  if (db.promise) {
    await db.promise
  } else {
    throw new Error('DB never started - Call db.start() function')
  }

  const migrationFolder = path.join(__dirname, '..', '..', 'migrations');
  console.log('migrationFolder', migrationFolder);
  await migrate(sql, {
    migrationsFolder: migrationFolder,
  }).then(() => {
    console.log('Migration done');
  }).catch((err) => {
    console.error('Migration failed', err);
  }).finally(() => {
    db.stop();
  });
})().then(() => {
  console.log('Migration Script Complete');
}).catch((err) => {
  console.error('Migration Script Failed', err);
}).finally(() => {
  process.exit();
})