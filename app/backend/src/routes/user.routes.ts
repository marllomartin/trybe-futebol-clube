import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserValidation from '../middlewares/users.middleware';

const { validateUser } = UserValidation;

const router = Router();

// Login
router.post('/login', validateUser, UserController.login);

export default router;
