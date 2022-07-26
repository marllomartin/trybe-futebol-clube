import { Request, Response } from 'express';
import getErrorMessage from '../utils/getErrorMessage';
import LeaderboardService from '../services/leaderboard.service';

class LeaderboardController {
  static getLeaderboardHome = async (req: Request, res: Response) => {
    try {
      const result = await LeaderboardService.getLeaderboardHome();
      res.status(200).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };

  static getLeaderboardAway = async (req: Request, res: Response) => {
    try {
      const result = await LeaderboardService.getLeaderboardAway();
      res.status(200).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };

  static getLeaderboardAll = async (req: Request, res: Response) => {
    try {
      const result = await LeaderboardService.getLeaderboardAll();
      res.status(200).json(result);
    } catch (Error) {
      return res.status(404).send({ message: getErrorMessage(Error) });
    }
  };
}

export default LeaderboardController;
