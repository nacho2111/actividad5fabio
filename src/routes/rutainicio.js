import express from 'express';
import { inicio, consultas, alta, nuevousuario, baja, eliminarusuario } from '../controllers/controladorinicio.js';

const rinicio = express.Router();

rinicio.get('/', inicio);
rinicio.get('/consulta/:num', consultas);

rinicio.get('/alta', alta);
rinicio.post('/alta', nuevousuario);
rinicio.get('/baja', baja);
rinicio.post('/baja', eliminarusuario);

export { rinicio };
