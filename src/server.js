import express from 'express';

const server = express();

server.get('/', (_req, res) => {
  return res.json({ message: 'maneiro mesmo!' });
});

server.listen(3000);
