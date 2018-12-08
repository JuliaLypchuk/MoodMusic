import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import {getBodyNode} from '@angular/animations/browser/src/render/shared';
import {withIdentifier} from 'codelyzer/util/astQuery';

import { MoodParamsModel } from '../models/mood-params.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})
export class LandingComponent implements OnInit {

  spotifyLink: string = '';
  trustedURLs: any[] = [];

  filters: any;
  moodParams: MoodParamsModel;

  f1 = new FormControl(''); // TODO finish

  leftText: string;

  moods: any = [
    'happy',
    'peaceful',
    'relaxing',
    'calm'
  ];

  constructor(public sanitizer: DomSanitizer) {

    this.moodParams = new MoodParamsModel();

    this.filters = [
      'danceability',
      'acousticness',
      'instrumentalness',
      'loudness'
    ];

    this.leftText = 'find your music';
  }

  ngOnInit() {
    this.getSpotifyLink();
    this.initForm();
  }

  getSpotifyLink() {
    // TODO finish
    this.spotifyLink = 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3;';
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
    this.trustedURLs.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyLink));
  }

  initForm() {
// TODO finish
  }

  prepareData() {

  }

  onSubmit(data: any) {
    document.getElementById('divider').style.opacity = '1';
   window.scrollTo({ top: document.body.offsetHeight,
                      behavior: 'smooth' });
    console.log(data);
  }
}
