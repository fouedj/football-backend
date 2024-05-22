import { Module } from '@nestjs/common';
import { TeamSeed } from './team.seed';
import { TeamModule } from 'src/modules/team/team.module';
import { LeaguesSeed } from './leagues.seed';
import { LeagueModule } from 'src/modules/league/league.module';
import { PlayerModule } from 'src/modules/player/player.module';
import { PlayerSeed } from './player.seed';

@Module({
  imports: [TeamModule, LeagueModule, PlayerModule],
  providers: [TeamSeed, LeaguesSeed, PlayerSeed],
  exports: [TeamSeed, LeaguesSeed, PlayerSeed],
})
export class SeederModule {}
