import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';
import getErrorMessage from '../utils/getErrorMessage';

class TeamsController {
  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await TeamsService.getAll();
      res.status(200).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const result = await TeamsService.getById(Number(id));
      res.status(200).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };
}

export default TeamsController;
