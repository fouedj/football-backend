import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leagues } from 'src/shared/models/leagues.model';

@Injectable()
export class LeagueService {
  constructor(
    @InjectModel(Leagues.name) private LeaguesModel: Model<Leagues>,
  ) {}

  async findAll(filter: string): Promise<Leagues[]> {
    return this.LeaguesModel.find({
      strLeague: new RegExp(`${filter}`, 'i'),
    }).exec();
  }

  async findOne(idLeague: string): Promise<Leagues> {
    return this.LeaguesModel.findOne({ idLeague }).exec();
  }
}
