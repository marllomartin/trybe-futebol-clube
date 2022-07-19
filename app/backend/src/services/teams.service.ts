import TeamModel from '../database/models/team.model';

class TeamsService {
  static async getAll(): Promise<object> {
    const teams = await TeamModel.findAll();

    if (!teams) throw new Error('No teams found');

    return teams;
  }

  static async getById(id: number): Promise<object> {
    const team = await TeamModel.findByPk(id);

    if (!team) throw new Error('No team found');

    return team;
  }
}

export default TeamsService;
