import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const router = Router();

// Leaderboards
router.get('/leaderboard/home', LeaderboardController.getLeaderBoardHome);

export default router;
