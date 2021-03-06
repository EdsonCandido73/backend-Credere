import express from 'express';
import { getRepository } from 'typeorm';
import cors from 'cors';
import './database/connections';
import process from 'process';

import routes from './routes';
import Coordinates from './models/Coordinates';

const app = express();

app.use(cors());
app.use(express.json());

app.use( async(req, res, next) => {
  const coordinatesRepository = getRepository(Coordinates);
  const coordinates = await coordinatesRepository.findOne(1);
  if (!coordinates) {
    const coordinates = coordinatesRepository.create({
      id: 1,
      xCoordinate: 0,
      yCoordinate: 0,
      navDirection: "D",
    });
    await coordinatesRepository.save(coordinates)
  }
  next();
})

app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT);
