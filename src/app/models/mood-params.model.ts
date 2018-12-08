export class MoodParamsModel {
  text: string;
  danceability?: number;
  acousticness?: number;
  instrumentalness?: number;
  loudness?: number;

  constructor() {
    this.text = 'Perhaps it’s safe to say that most people want to be happy. ' +
      'They want to actually enjoy being here in this big, crazy, confusing world. ' +
      'But too many people struggle with being happy. They can’t seem to find happiness in life. ' +
      'To them, it is something that doesn’t come naturally to a lot of people, to be quite blunt. ' +
      'Fortunately, there are plenty of strategies people can use to create happiness, or at least strive for it. ' +
      'It really depends on one’s conviction to be always be happy, to have gratitude even when it is difficult to find, ' +
      'having the right people in one’s life, and a person having ' +
      'a job – or at least a hobby – that they feel good about doing, ' +
      'that somehow brings meaning, direction, and purpose into their lives.';
    this.danceability = 0;
    this.acousticness = 0
    this.instrumentalness = 0;
    this.loudness = 0;
  }
}
