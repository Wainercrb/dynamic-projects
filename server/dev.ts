import express from 'express';
import { createApi } from './api';
const app = express();
app.use('/api', createApi());
app.listen(3001, '127.0.0.1', () => console.log('API de desarrollo lista en puerto 3001'));
