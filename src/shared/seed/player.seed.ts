import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { Player } from '../models/player.model';
import { Team } from '../models/teams.model';

@Injectable()
export class PlayerSeed {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<Player>,
    @InjectModel(Team.name) private teamModel: Model<Player>,
  ) {}

  public async seedPlayers() {
    try {
      const count = await this.playerModel.countDocuments();
      if (count === 0) {
        const teamResponses = await this.teamModel.find();

        // Fetch players for all teams in parallel
        const playerFetchPromises = teamResponses.map((team) =>
          axios.get(
            `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${team.strTeam}`,
          ),
        );
        const playerResponses = await Promise.all(playerFetchPromises);
        console.log(playerResponses);
        // Extract all players
        const allPlayers = playerResponses.flatMap(
          (response) => response.data.player || [],
        );

        // // Insert or update all players in parallel
        // const playerUpsertPromises = allPlayers.map((player) =>
        //   this.playerModel.updateOne(
        //     { strPlayer: player.strPlayer },
        //     { $set: player },
        //     { upsert: true },
        //   ),
        // );
        // await Promise.all(playerUpsertPromises);

        console.log('Players seeded successfully.');
      } else {
        console.log('Players already exist. Skipping seeding.');
      }
    } catch (err) {
      console.error('Error seeding players:', err);
    }
  }
}
