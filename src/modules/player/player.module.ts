import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from 'src/shared/models/player.model';
import { PlayerSeed } from 'src/shared/seed/player.seed';
import { Team, TeamSchema } from 'src/shared/models/teams.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  controllers: [PlayerController],
  providers: [PlayerService, PlayerSeed],
  exports: [PlayerService, PlayerSeed],
})
export class PlayerModule {}
