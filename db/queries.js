const pool = require('./pool');

const getMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

const addMessage = async (text, username) => {
  await pool.query(
    'INSERT INTO messages (text, username, added) VALUES ($1, $2, NOW())',
    [text, username]
  );
};

module.exports = { getMessages, addMessage };
