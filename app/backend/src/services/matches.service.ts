import TeamModel from '../database/models/team.model';
import MatchModel from '../database/models/match.model';
import Goals from '../interfaces/goals.interface';

class MatchesService {
  static async getAll(): Promise<object> {
    const matches = await MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    if (!matches) throw new Error('No matches found');

    return matches;
  }

  static async getAllFiltered(inProgress: boolean): Promise<object> {
    const matches = await MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamModel, as: 'teamAway', attributes: ['teamName'] },
      ],
      where: { inProgress },
    });

    if (!matches) throw new Error('No matches found');

    return matches;
  }

  static async create(match: object): Promise<object> {
    const newMatch = await MatchModel.create({ ...match, inProgress: 1 });

    return newMatch;
  }

  static async finish(id: string): Promise<void> {
    await MatchModel.update({ inProgress: 0 }, { where: { id } });
  }

  static async editInProgress(id: string, goals: Goals): Promise<void> {
    const { homeTeamGoals, awayTeamGoals } = goals;

    await MatchModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}

export default MatchesService;
