import { Controller, Get, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Player')
@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}
  @Get('team/:id')
  getPlayers(@Param('id') id: string) {
    return this.playerService.findPlayersByTeam(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(id);
  }
}
