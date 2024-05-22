import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Team extends Document {
  @Prop({})
  idTeam: string;

  @Prop({})
  idSoccerXML: string;

  @Prop({})
  idAPIfootball: string;

  @Prop()
  intLoved: string;

  @Prop({})
  strTeam: string;

  @Prop()
  strTeamShort: string;

  @Prop()
  strAlternate: string;

  @Prop()
  intFormedYear: string;

  @Prop()
  strSport: string;

  @Prop()
  strLeague: string;

  @Prop()
  idLeague: string;

  @Prop()
  strLeague2: string;

  @Prop()
  idLeague2: string;

  @Prop()
  strLeague3: string;

  @Prop()
  idLeague3: string;

  @Prop()
  strLeague4: string;

  @Prop()
  idLeague4: string;

  @Prop()
  strLeague5: string;

  @Prop()
  idLeague5: string;

  @Prop()
  strLeague6: string;

  @Prop()
  idLeague6: string;

  @Prop()
  strLeague7: string;

  @Prop()
  idLeague7: string;

  @Prop()
  strDivision: string;

  @Prop()
  strStadium: string;

  @Prop()
  strKeywords: string;

  @Prop()
  strRSS: string;

  @Prop()
  strStadiumThumb: string;

  @Prop()
  strStadiumDescription: string;

  @Prop()
  strStadiumLocation: string;

  @Prop()
  intStadiumCapacity: string;

  @Prop()
  strWebsite: string;

  @Prop()
  strFacebook: string;

  @Prop()
  strTwitter: string;

  @Prop()
  strInstagram: string;

  @Prop()
  strDescriptionEN: string;

  @Prop()
  strDescriptionDE: string;

  @Prop()
  strDescriptionFR: string;

  @Prop()
  strDescriptionCN: string;

  @Prop()
  strDescriptionIT: string;

  @Prop()
  strDescriptionJP: string;

  @Prop()
  strDescriptionRU: string;

  @Prop()
  strDescriptionES: string;

  @Prop()
  strDescriptionPT: string;

  @Prop()
  strDescriptionSE: string;

  @Prop()
  strDescriptionNL: string;

  @Prop()
  strDescriptionHU: string;

  @Prop()
  strDescriptionNO: string;

  @Prop()
  strDescriptionIL: string;

  @Prop()
  strDescriptionPL: string;

  @Prop()
  strKitColour1: string;

  @Prop()
  strKitColour2: string;

  @Prop()
  strKitColour3: string;

  @Prop()
  strGender: string;

  @Prop()
  strCountry: string;

  @Prop()
  strTeamBadge: string;

  @Prop()
  strTeamJersey: string;

  @Prop()
  strTeamLogo: string;

  @Prop()
  strTeamFanart1: string;

  @Prop()
  strTeamFanart2: string;

  @Prop()
  strTeamFanart3: string;

  @Prop()
  strTeamFanart4: string;

  @Prop()
  strTeamBanner: string;

  @Prop()
  strYoutube: string;

  @Prop()
  strLocked: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
