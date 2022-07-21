import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import MatchValidation from '../middlewares/matches.middleware';

const { checkEqualTeams, checkExistingTeam, authToken } = MatchValidation;

const router = Router();

// Matches
router.get('/matches', MatchesController.getAll);
router.post('/matches', checkEqualTeams, checkExistingTeam, authToken, MatchesController.create);
router.patch('/matches/:id/finish', MatchesController.finish);
router.patch('/matches/:id', MatchesController.editInProgress);

export default router;
