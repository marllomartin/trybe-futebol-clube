import Match from '../interfaces/match.interface';

class leaderboardFunctions {
  static calcTotalPoints(matches: Match[]): number {
    return matches.reduce((acc, curr) => {
      if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
      if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
  }

  static calcTotalGames(matches: Match[]): number {
    return matches.length;
  }

  static calcTotalVictories(matches: Match[]): number {
    return matches.filter((match) => match.homeTeamGoals > match.awayTeamGoals).length;
  }

  static calcTotalDraws(matches: Match[]): number {
    return matches.filter((match) => match.homeTeamGoals === match.awayTeamGoals).length;
  }

  static calcTotalLosses(matches: Match[]): number {
    return matches.filter((match) => match.homeTeamGoals < match.awayTeamGoals).length;
  }

  static calcGoalsFavor(matches: Match[]): number {
    return matches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
  }

  static calcGoalsOwn(matches: Match[]): number {
    return matches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
  }

  static calcGoalsBalance(goalsFavor: number, goalsOwn: number): number {
    return goalsFavor - goalsOwn;
  }

  static calcEfficiency(totalPoints: number, totalGames: number): number {
    return Number(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
  }
}

export default leaderboardFunctions;
