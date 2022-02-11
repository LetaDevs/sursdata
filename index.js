import express from 'express';
import router from './router/router.js';

const app = express();

app.use('/', router);

const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0', () => console.log('server ready'));