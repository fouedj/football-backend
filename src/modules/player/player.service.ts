import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from 'src/shared/models/player.model';
import axios from 'axios';

@Injectable()
export class PlayerService {
  constructor(@InjectModel(Player.name) private PlayerModel: Model<Player>) {}
  async findAll(): Promise<Player[]> {
    return this.PlayerModel.find().exec();
  }

  async findOne(id: string): Promise<Player> {
    return this.PlayerModel.findById(id).exec();
  }

  async findPlayersByTeam(team): Promise<Player[]> {
    if (team === 'undefined') {
      return null;
    }
    const count = await this.PlayerModel.countDocuments({ strTeam: team });

    if (count && team !== 'undefined') {
      return this.PlayerModel.find({ strTeam: team }).exec();
    }
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${team}`,
    );
    console.log(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${team}`,
    );
    this.PlayerModel.insertMany(response.data.player);

    return response.data?.player;
  }
}
