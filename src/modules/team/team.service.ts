import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Team } from 'src/shared/models/teams.model';

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private TeamModel: Model<Team>) {}

  async findAll(): Promise<Team[]> {
    return this.TeamModel.find().exec();
  }

  async findOne(id: string): Promise<Team> {
    return this.TeamModel.findOne({ idTeam: +id }).exec();
  }
  async getAllTeamsInLeague(league: string): Promise<any> {
    try {
      const filter: any = {};
      if (league) {
        filter.$or = [
          {
            strTeam: new RegExp(`${league}`, 'i'),
          },
          {
            strAlternate: new RegExp(`${league}`, 'i'),
          },
          {
            strLeague: new RegExp(`${league}`, 'i'),
          },
        ];
      }
      return this.TeamModel.find(filter);
    } catch (err) {
      throw err;
    }
  }
}
