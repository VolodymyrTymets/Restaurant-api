import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routers from './routers';

let app = express();
app.server = http:createServer(app);

//middleware

//passport config

//api routers v1
app.use('/v1', routers);

app.server.listem(config.port);
console.log(`started on port ${app.server.address().port}`);

export default app;
