import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TeamSeed } from './shared/seed/team.seed';
import { LeaguesSeed } from './shared/seed/leagues.seed';
import { PlayerSeed } from './shared/seed/player.seed';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private teamService: TeamSeed,
    private leaguesService: LeaguesSeed,
    private playerService: PlayerSeed,
  ) {}
  onApplicationBootstrap(): any {
    this.teamService.seedTeams();
    this.leaguesService.seedLeagues();
    // this.playerService.seedPlayers();
  }
}
