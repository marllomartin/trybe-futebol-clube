import { sign } from 'jsonwebtoken';
import 'dotenv/config';
import Login from '../interfaces/login.interface';
import UserModel from '../database/models/user.model';
import authPassword from '../utils/authPassword';

const { JWT_SECRET } = process.env;

class UserService {
  static async login(login: Login): Promise<object> {
    const { email, password } = login;
    const verify = await UserModel.findOne({ where: { email } });

    if (!verify) throw new Error('Incorrect email or password');
    if (verify) {
      const auth = await authPassword(password, verify?.password);
      if (!auth) throw new Error('Incorrect email or password');
    }
    const secret = String(JWT_SECRET);
    const token = sign({ data: email }, secret, { expiresIn: '1h' });

    return { token };
  }
}

export default UserService;
