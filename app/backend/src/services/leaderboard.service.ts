import TeamModel from '../database/models/team.model';
import MatchModel from '../database/models/match.model';
import leaderboardFunctions from '../utils/leaderboardFunctions';
import Leaderboard from '../interfaces/leaderboard.interface';

const {
  calcTotalPoints,
  calcTotalGames,
  calcTotalVictories,
  calcTotalDraws,
  calcTotalLosses,
  calcGoalsFavor,
  calcGoalsOwn,
  calcGoalsBalance,
  calcEfficiency,
  sortLeaderboard } = leaderboardFunctions;

class LeaderboardService {
  static async getLeaderboardHome(): Promise<Leaderboard[]> {
    const allMatches = await MatchModel.findAll({ where: { inProgress: 0 } });
    const allTeams = await TeamModel.findAll();

    const leaderboards = allTeams.map((team) => {
      const matches = allMatches.filter((match) => match.homeTeam === team.id);

      return {
        name: team.teamName,
        totalPoints: calcTotalPoints(matches),
        totalGames: calcTotalGames(matches),
        totalVictories: calcTotalVictories(matches),
        totalDraws: calcTotalDraws(matches),
        totalLosses: calcTotalLosses(matches),
        goalsFavor: calcGoalsFavor(matches),
        goalsOwn: calcGoalsOwn(matches),
        goalsBalance: calcGoalsBalance(calcGoalsFavor(matches), calcGoalsOwn(matches)),
        efficiency: calcEfficiency(calcTotalPoints(matches), calcTotalGames(matches)),
      };
    });

    return sortLeaderboard(leaderboards);
  }
}

export default LeaderboardService;
