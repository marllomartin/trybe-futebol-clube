import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import getErrorMessage from '../utils/getErrorMessage';

class MatchesController {
  static getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (inProgress) {
      try {
        const result = await MatchesService.getAllFiltered(inProgress === 'true');
        return res.status(200).json(result);
      } catch (Error) {
        return res.status(404).send({ message: getErrorMessage(Error) });
      }
    }

    try {
      const result = await MatchesService.getAll();
      res.status(200).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };

  static create = async (req: Request, res: Response) => {
    try {
      const match = req.body;
      const result = await MatchesService.create(match);
      res.status(201).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };

  static finish = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await MatchesService.finish(id);
      res.status(200).send({ message: 'Finished' });
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };

  static editInProgress = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const goals = req.body;
      await MatchesService.editInProgress(id, goals);
      res.status(200).send({ message: 'Match updated' });
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };
}

export default MatchesController;
