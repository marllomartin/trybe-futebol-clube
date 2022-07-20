import { DataTypes, Model } from 'sequelize';
import db from '.';

class Team extends Model {
  // public <campo>!: <tipo>;
  public id!: number;
  public teamName!: string;
}

Team.init({
  // ... Campos
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'Team',
  timestamps: false,
});

export default Team;
