type TeamType = { teamName: string };

interface Match {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number;
  inProgress: number;
  teamHome?: TeamType;
  teamAway?: TeamType
}

export default Match;
