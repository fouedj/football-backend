import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LeagueService } from './league.service';

@ApiTags('Leagues')
@Controller('league')
export class LeagueController {
  constructor(private leagueService: LeagueService) {}
  @Get('all')
  getLeagues(@Query('name') league: string) {
    return this.leagueService.findAll(league);
  }
  @Post()
  createTeam() {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leagueService.findOne(id);
  }
}
