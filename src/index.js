import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routers from './routes';

let app = express();
app.server = http.createServer(app);

//middleware
// parse apllication/json
app.use(bodyParser.json({
  limit: config.bodyLimit
}))


//passport config

//api routers v1
app.use('/v1', routers);

app.server.listen(config.port);
console.log(`started on port ${app.server.address().port}`);

export default app;
