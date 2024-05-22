import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from '../models/teams.model';
import { Model } from 'mongoose';
import axios from 'axios';
@Injectable()
export class TeamSeed {
  constructor(@InjectModel(Team.name) private TeamModel: Model<Team>) {}
  public async seedTeams() {
    try {
      const count = await this.TeamModel.countDocuments();
      if (count === 0) {
        const allLeague = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php',
        );
        for (const l of allLeague.data?.leagues) {
          const response = await axios.get(
            `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${l.strLeague}`,
          );
          await this.TeamModel.insertMany(response.data.teams);
          console.log('Teams seeded successfully.');
        }
      } else {
        console.log('Teams already exist. Skipping seeding.');
      }
    } catch (err) {
      console.error('Error seeding teams:', err);
    }
  }
}
