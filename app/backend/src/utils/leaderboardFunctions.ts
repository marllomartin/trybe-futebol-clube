import Leaderboard from '../interfaces/leaderboard.interface';
import Match from '../interfaces/match.interface';

class leaderboardFunctions {
  static calcTotalPoints(matches: Match[], teamSide: string): number {
    if (teamSide === 'h') {
      return matches.reduce((acc, curr) => {
        if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
        if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
        return acc;
      }, 0);
    }
    return matches.reduce((acc, curr) => {
      if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 3;
      if (curr.awayTeamGoals === curr.homeTeamGoals) return acc + 1;
      return acc;
    }, 0);
  }

  static calcTotalGames(matches: Match[]): number {
    return matches.length;
  }

  static calcTotalVictories(matches: Match[], teamSide: string): number {
    if (teamSide === 'h') {
      return matches.filter((match) => match.homeTeamGoals > match.awayTeamGoals).length;
    }
    return matches.filter((match) => match.awayTeamGoals > match.homeTeamGoals).length;
  }

  static calcTotalDraws(matches: Match[]): number {
    return matches.filter((match) => match.homeTeamGoals === match.awayTeamGoals).length;
  }

  static calcTotalLosses(matches: Match[], teamSide: string): number {
    if (teamSide === 'h') {
      return matches.filter((match) => match.homeTeamGoals < match.awayTeamGoals).length;
    }
    return matches.filter((match) => match.awayTeamGoals < match.homeTeamGoals).length;
  }

  static calcGoalsFavor(matches: Match[], teamSide: string): number {
    if (teamSide === 'h') {
      return matches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
    }
    return matches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
  }

  static calcGoalsOwn(matches: Match[], teamSide: string): number {
    if (teamSide === 'h') {
      return matches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
    }
    return matches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
  }

  static calcGoalsBalance(goalsFavor: number, goalsOwn: number): number {
    return goalsFavor - goalsOwn;
  }

  static calcEfficiency(totalPoints: number, totalGames: number): number {
    return Number(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
  }

  static leaderboardObject(teamName: string, efficiency: number, leaderboard: Leaderboard) {
    return {
      name: teamName,
      totalPoints: leaderboard.totalPoints,
      totalGames: leaderboard.totalGames,
      totalVictories: leaderboard.totalVictories,
      totalDraws: leaderboard.totalDraws,
      totalLosses: leaderboard.totalLosses,
      goalsFavor: leaderboard.goalsBalance,
      goalsOwn: leaderboard.goalsOwn,
      goalsBalance: leaderboard.goalsBalance,
      efficiency,
    };
  }

  static sortLeaderboard(leaderboards: Leaderboard[]): Leaderboard[] {
    leaderboards.sort((a, b) => a.goalsOwn - b.goalsOwn);
    leaderboards.sort((a, b) => b.goalsFavor - a.goalsFavor);
    leaderboards.sort((a, b) => b.goalsBalance - a.goalsBalance);
    leaderboards.sort((a, b) => b.totalVictories - a.totalVictories);
    leaderboards.sort((a, b) => b.totalPoints - a.totalPoints);

    return leaderboards;
  }
}
export default leaderboardFunctions;
