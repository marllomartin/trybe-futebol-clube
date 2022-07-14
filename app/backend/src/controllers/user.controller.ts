import { Request, Response } from 'express';
import UserService from '../services/user.service';
import getErrorMessage from '../utils/getErrorMessage';

class UserController {
  static login = async (req: Request, res: Response) => {
    try {
      const result = await UserService.login(req.body);
      res.status(200).json(result);
    } catch (Error) {
      return res.status(401).send({ message: getErrorMessage(Error) });
    }
  };
}

export default UserController;
