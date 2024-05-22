import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Team')
@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  getTeams() {
    return this.teamService.findAll();
  }

  @Post()
  createTeam() {}

  @Get('in-league')
  async getAllTeamsInLeague(@Query('league') league: string) {
    const teams = await this.teamService.getAllTeamsInLeague(league);
    return teams;
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(id);
  }
}
