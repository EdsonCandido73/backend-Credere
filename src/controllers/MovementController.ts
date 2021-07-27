import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Coordinates from '../models/Coordinates';
import CoordinatesValidator from '../Utils/CoordinatesValidator';
import MovementUtils from '../Utils/MovementUtils';
import MovementValidator from '../Utils/MovementValidator';

export default {
  async move(request: Request, response: Response) {
    const coordinatesRepository = getRepository(Coordinates);

    const coordinates = await coordinatesRepository.findOne(1);
    const initMovements = request.body.movimentos;
    const movements = initMovements.map(initMovement => {return initMovement.toUpperCase()})

    if (!MovementValidator.hasValidMovements(movements)) {
      return response.status(422).json({ erro: "Um movimento inválido foi detectado, use somente M, GD e GE."});
    }

    movements.forEach(movement => {
      if (movement === 'GE' || movement === 'GD') {
        coordinates!.navDirection = MovementUtils.nextDirection(coordinates!.navDirection, movement)  
      } else {
        let result = MovementUtils.nextCoordinate(coordinates!.navDirection, coordinates!.xCoordinate, coordinates!.yCoordinate);
        coordinates!.xCoordinate = result.xCoordinate;
        coordinates!.yCoordinate = result.yCoordinate; 

        if (!CoordinatesValidator.hasValidCoordinates(coordinates!.xCoordinate, coordinates!.yCoordinate)) {
          return response.status(422).json(
            { erro: `Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de movimentar-se para as coordenadas x=${coordinates!.xCoordinate} e y=${coordinates!.yCoordinate}`}
          );
        }
      }
    });

    if (CoordinatesValidator.hasValidCoordinates(coordinates!.xCoordinate, coordinates!.yCoordinate)) {
      await coordinatesRepository.save(coordinates!);
      return response.status(200).json(coordinates);
    }   
  }
}