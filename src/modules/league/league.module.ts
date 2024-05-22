import { Module } from '@nestjs/common';
import { LeagueController } from './league.controller';
import { LeagueService } from './league.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Leagues, LeaguesSchema } from 'src/shared/models/leagues.model';
import { LeaguesSeed } from 'src/shared/seed/leagues.seed';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Leagues.name, schema: LeaguesSchema }]),
  ],
  controllers: [LeagueController],
  providers: [LeagueService, LeaguesSeed],
  exports: [LeagueService, LeaguesSeed],
})
export class LeagueModule {}
