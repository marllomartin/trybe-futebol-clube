import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import getErrorMessage from '../utils/getErrorMessage';

class MatchesController {
  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await MatchesService.getAll();
      res.status(200).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };
}

export default MatchesController;
