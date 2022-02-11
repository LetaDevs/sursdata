import express from 'express';
import router from './router/router.js';

const app = express();

app.use('/', router);

const port = process.env.PORT || 4000;
const host = 'localhost' || '0.0.0.0';

app.listen(port, host, () => console.log('server ready'));