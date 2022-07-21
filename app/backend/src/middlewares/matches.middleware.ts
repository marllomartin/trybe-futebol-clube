import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import MatchModel from '../database/models/match.model';
import getErrorMessage from '../utils/getErrorMessage';

const { JWT_SECRET } = process.env;

class MatchValidation {
  static async checkEqualTeams(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(400)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    next();
  }

  static async checkExistingTeam(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;

    const homeTeamExist = await MatchModel.findByPk(homeTeam);
    const awayTeamExist = await MatchModel.findByPk(awayTeam);

    if (!homeTeamExist || !awayTeamExist) {
      return res.status(404)
        .json({ message: 'There is no team with such id!' });
    }

    next();
  }

  static async authToken(req: Request, res: Response, next: NextFunction) {
    const { authorization: token } = req.headers;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const verifyToken = verify(token as string, JWT_SECRET as string);
      if (!verifyToken) throw new Error('Token must be a valid token');
      next();
    } catch (Error) {
      return res.status(401).send({ message: getErrorMessage(Error) });
    }
  }
}

export default MatchValidation;
