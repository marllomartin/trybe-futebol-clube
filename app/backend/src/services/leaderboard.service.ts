/* eslint-disable max-len */
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
        totalPoints: calcTotalPoints(matches, 'h'),
        totalGames: calcTotalGames(matches),
        totalVictories: calcTotalVictories(matches, 'h'),
        totalDraws: calcTotalDraws(matches),
        totalLosses: calcTotalLosses(matches, 'h'),
        goalsFavor: calcGoalsFavor(matches, 'h'),
        goalsOwn: calcGoalsOwn(matches, 'h'),
        goalsBalance: calcGoalsBalance(calcGoalsFavor(matches, 'h'), calcGoalsOwn(matches, 'h')),
        efficiency: calcEfficiency(calcTotalPoints(matches, 'h'), calcTotalGames(matches)),
      };
    });

    return sortLeaderboard(leaderboards);
  }

  static async getLeaderboardAway(): Promise<Leaderboard[]> {
    const allMatches = await MatchModel.findAll({ where: { inProgress: 0 } });
    const allTeams = await TeamModel.findAll();

    const leaderboards = allTeams.map((team) => {
      const matches = allMatches.filter((match) => match.awayTeam === team.id);

      return {
        name: team.teamName,
        totalPoints: calcTotalPoints(matches, 'a'),
        totalGames: calcTotalGames(matches),
        totalVictories: calcTotalVictories(matches, 'a'),
        totalDraws: calcTotalDraws(matches),
        totalLosses: calcTotalLosses(matches, 'a'),
        goalsFavor: calcGoalsFavor(matches, 'a'),
        goalsOwn: calcGoalsOwn(matches, 'a'),
        goalsBalance: calcGoalsBalance(calcGoalsFavor(matches, 'a'), calcGoalsOwn(matches, 'awayTeam')),
        efficiency: calcEfficiency(calcTotalPoints(matches, 'a'), calcTotalGames(matches)),
      };
    });

    return sortLeaderboard(leaderboards);
  }
}

export default LeaderboardService;
