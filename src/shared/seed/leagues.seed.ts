import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { Leagues } from '../models/leagues.model';
@Injectable()
export class LeaguesSeed {
  constructor(
    @InjectModel(Leagues.name) private LeaguesModel: Model<Leagues>,
  ) {}
  public async seedLeagues() {
    try {
      const count = await this.LeaguesModel.countDocuments();
      if (count === 0) {
        const response = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php',
        );
        await this.LeaguesModel.insertMany(response.data.leagues);
        console.log('Leagues seeded successfully.');
      } else {
        console.log('Leagues already exist. Skipping seeding.');
      }
    } catch (err) {
      console.error('error sending leagues:', err);
    }
  }
}
