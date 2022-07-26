import { DataTypes, Model } from 'sequelize';
import db from '.';
import Team from './team.model';

class Match extends Model {
  public id!: number;
  public homeTeam!: number;
  public homeTeamGoals!: number;
  public awayTeam!: number;
  public awayTeamGoals!: number;
  public inProgress!: number;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'Team',
      key: 'id',
    },
  },
  homeTeamGoals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'Team',
      key: 'id',
    },
  },
  awayTeamGoals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Match',
  timestamps: false,
});

Match.belongsTo(Team, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});
Match.belongsTo(Team, {
  foreignKey: 'awayTeam',
  as: 'teamAway',
});

Team.hasMany(Match, {
  foreignKey: 'homeTeam',
  as: 'homeMatch',
});
Team.hasMany(Match, {
  foreignKey: 'awayTeam',
  as: 'awayMatch',
});

export default Match;
