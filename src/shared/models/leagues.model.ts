import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Leagues extends Document {
  @Prop({ required: true })
  idLeague: string;

  @Prop({ required: true })
  strLeague: string;

  @Prop({ required: true })
  strSport: string;

  @Prop({ required: false })
  strLeagueAlternate: string;
}

export const LeaguesSchema = SchemaFactory.createForClass(Leagues);
