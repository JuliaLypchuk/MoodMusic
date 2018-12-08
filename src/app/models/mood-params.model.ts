export class MoodParamsModel {
  text: string;
  danceability?: number;
  acousticness?: number;
  instrumentalness?: number;
  loudness?: number;

  constructor() {
    this.text = 'happiness';
    this.danceability = 0.5;
    this.acousticness = 0.5
    this.instrumentalness = 0.5;
    this.loudness = 0.5;
  }
}
