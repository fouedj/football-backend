import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './modules/team/team.module';
import { MongoConnectionModule } from './shared/database/mongo.module';
import { PlayerModule } from './modules/player/player.module';
import { LeagueModule } from './modules/league/league.module';

@Module({
  imports: [MongoConnectionModule, TeamModule, PlayerModule, LeagueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
