import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const router = Router();

// Matches
router.get('/matches', MatchesController.getAll);

export default router;
