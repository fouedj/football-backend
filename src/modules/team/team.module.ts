import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from 'src/shared/models/teams.model';
import { TeamSeed } from 'src/shared/seed/team.seed';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  providers: [TeamService, TeamSeed],
  controllers: [TeamController],
  exports: [TeamService, TeamSeed],
})
export class TeamModule {}
