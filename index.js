import express from 'express';
import router from './router/router.js';

const app = express();

app.use('/', router);

app.listen(4000, () => console.log('server ready'));