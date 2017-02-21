import express from 'express';
import middleware from '../middleware';
import initializeDb from '../db';
import config from '../config';
import restaurant from '../controller/restaurant'

let router = express();

// connect to db
 initializeDb(db => {

   // interanl middleware
   router.use(middleware({ config, db }));

   // api routers v1(/v1)
   router.use('/restaurant', restaurant({ config, db }));
 });

export default router;
