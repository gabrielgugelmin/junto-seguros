import { Router } from 'express';

const routes = new Router();
const data = ['12.345.678/0001-23'];

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  // const [, token] = authHeader.split(' ');
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  return next();
}

routes.use((req, res, next) => {
  req.headers.authorization = 'Bearer 23456789';

  next();
});

routes.get('/quote/:cnpj', auth, (req, res) => {
  const { cnpj } = req.params;

  if (!cnpj) return res.status(400).json({ error: 'CNPJ deve ser fornecido.' });

  const cnpjExists = data.find(c => c === cnpj);

  if (!cnpjExists)
    return res.status(404).json({ error: 'Empresa não encontrada. ' });

  return res.json({ payload: cnpj });
});

export default routes;
