import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const router = Router();

// Leaderboards
router.get('/leaderboard/home', LeaderboardController.getLeaderboardHome);
router.get('/leaderboard/away', LeaderboardController.getLeaderboardAway);
router.get('/leaderboard', LeaderboardController.getLeaderboardAll);

export default router;
