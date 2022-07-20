import TeamModel from '../database/models/team.model';
import MatchModel from '../database/models/match.model';

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
}

export default MatchesService;
