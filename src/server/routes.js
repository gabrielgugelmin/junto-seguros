import { Router } from 'express';

const routes = new Router();
const data = ['12.345.678/0001-23'];

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  // const [, token] = authHeader.split(' ');
  const token = authHeader.split(' ')[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  return next();
}

routes.get('/quote/:cnpj', auth, (req, res) => {
  return res.json({ message: 'ok' });
});

export default routes;
