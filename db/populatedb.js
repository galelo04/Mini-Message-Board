const { Client } = require('pg');
require('dotenv').config();
const { USER, HOST, PORT, PASSWORD, DATABASE } = process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
    username VARCHAR ( 50 ),
    added TIMESTAMP
);

INSERT INTO messages (text, username, added) 
VALUES
('Hi there!','Amando','2021-01-01 12:00:00'),
('Hello World!','Charles','2021-01-01 12:01:00');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    host: HOST, // or wherever the db is hosted
    user: USER,
    database: DATABASE,
    password: PASSWORD,
    port: PORT, // The default port
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
