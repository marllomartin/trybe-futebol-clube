import { sign, verify } from 'jsonwebtoken';
import 'dotenv/config';
import Login from '../interfaces/login.interface';
import UserModel from '../database/models/user.model';
import authPassword from '../utils/authPassword';

const { JWT_SECRET } = process.env;

class UserService {
  static async login(login: Login): Promise<object> {
    const { email, password } = login;
    const find = await UserModel.findOne({ where: { email } });

    if (!find) throw new Error('Incorrect email or password');
    if (find) {
      const auth = await authPassword(password, find?.password);
      if (!auth) throw new Error('Incorrect email or password');
    }
    const secret = String(JWT_SECRET);
    const token = sign({ data: email }, secret, { expiresIn: '1h' });

    return { token };
  }

  static async loginValidate(token: string | undefined) {
    const secret = String(JWT_SECRET);
    const decode = verify(token as string, secret);
    const { data } = decode as { data: string };
    const find = await UserModel.findOne({ where: { email: data } });

    return { role: find?.role };
  }
}

export default UserService;
