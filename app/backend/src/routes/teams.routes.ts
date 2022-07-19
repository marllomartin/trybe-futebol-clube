import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const router = Router();

// Teams
router.get('/teams', TeamsController.getAll);
router.get('/teams/:id', TeamsController.getById);

export default router;
