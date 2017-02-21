import express from 'express';
import middleware from 'middleware';
import initializeDb from '../db';
import config from '../config';

let router = express();

// connect to db
 initializeDb(db => {

   // interanl middleware
   router.use(middleware({ config, db }));

   // api routers v1(/v1)
 });

export default router;
