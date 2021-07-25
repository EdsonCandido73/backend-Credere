import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Coordinates from '../models/Coordinates';


export default {

  async index(request: Request, response: Response) {
    const coordinatesRepository = getRepository(Coordinates);
    const coordinates = await coordinatesRepository.find();

    return response.json(coordinates);
  },

  async reset(request: Request, response: Response) {
    const coordinatesRepository = getRepository(Coordinates);
    const coordinates = coordinatesRepository.create({
      id: 1,
      xCoordinate: 0,
      yCoordinate: 0,
      navDirection: "D",
    });

    await coordinatesRepository.save(coordinates);
  
    return response.status(201).json(coordinates);
  }
}